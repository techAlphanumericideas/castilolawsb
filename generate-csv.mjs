import fs from 'fs';
import path from 'path';

// CONFIGURACIÓN: Archivo de entrada y salida
const JSON_FILE_PATH = path.join(process.cwd(), 'messages', 'es.json');
const OUTPUT_CSV_PATH = path.join(process.cwd(), 'reporte_legal_espanol.csv');

// MAPEO DE NOMBRES: Traduce las claves técnicas a nombres elegantes para el Manager
const traduccionPaginas = {
    "TRUCK": "ACCIDENTES DE CAMIÓN",
    "BICYCLE": "ACCIDENTES DE BICICLETA",
    "ASBESTOS": "ASBESTO Y MESOTELIOMA",
    "BRAINSPINAL": "LESIONES CEREBRALES Y ESPINALES",
    "DEFECTIVEPRODUCTS": "PRODUCTOS DEFECTUOSOS",
    "DOGBITES": "MORDEDURAS DE PERRO",
    "SEXUALABUSE": "ABUSO SEXUAL",
    "SLIPANDFALL": "RESBALONES Y CAÍDAS",
    "MOTORCYCLE": "ACCIDENTES DE MOTOCICLETA",
    "PEDESTRIAN": "ACCIDENTES DE PEATONES",
    "HITANDRUN": "CHOCA Y HUYE (HIT & RUN)",
    "CELLPHONE": "NEGLIGENCIA POR USO DE CELULAR",
    "DRUNKDRIVING": "ACCIDENTES POR CONDUCCIÓN EBRIO",
    "ABOUT": "SOBRE NOSOTROS / BIOGRAFÍA",
    "HERO": "SECCIÓN PRINCIPAL (INICIO)",
    "PRACTICEAREAS": "RESUMEN ÁREAS DE PRÁCTICA",
    "CONTACT": "CONTACTO",
    "PROCESS": "MÉTODO Y PROCESO"
};

const clean = (txt) => {
    if (!txt) return "";
    // Limpia saltos de línea y escapa comillas para que el CSV sea perfecto en Excel
    return `"${String(txt).replace(/"/g, '""').replace(/\r?\n|\r/g, ' ')}"`;
};

function transformForManagement(data) {
    const rows = [];

    // --- 1. PROCESAR SUB-PÁGINAS (Camiones, Bicicletas, etc.) ---
    const subPages = data.PracticeAreasPage?.subPages || {};
    
    for (const [pageKey, pageData] of Object.entries(subPages)) {
        const nombrePagina = traduccionPaginas[pageKey.toUpperCase()] || pageKey.toUpperCase();

        // Lógica para capturar títulos de contenido (estándar o sección1)
        const contentHeader = 
            pageData.content?.title || 
            pageData.content?.section1?.title || 
            "";

        // Lógica para capturar cuerpo de contenido (estándar o p1/p2 de la versión española)
        const contentBody = 
            pageData.content?.description || 
            pageData.content?.section1?.p1 || 
            pageData.content?.section1?.p2 || 
            "";

        let detalles = [];
        if (pageData.content) {
            Object.entries(pageData.content).forEach(([key, value]) => {
                if (key === 'title' || key === 'description' || key === 'section1') return;
                if (typeof value === 'object') {
                    detalles.push(`${key.toUpperCase()}: ${JSON.stringify(value)}`);
                } else {
                    detalles.push(`${key}: ${value}`);
                }
            });
        }

        const row = [
            nombrePagina,                             // SECCIÓN / PÁGINA
            pageData.metadata?.title || "",           // TÍTULO META SEO
            pageData.hero?.title || "",               // TÍTULO PRINCIPAL (HERO)
            pageData.hero?.subtitle || "",            // SUBTÍTULO (HERO)
            pageData.hero?.description || "",         // DESCRIPCIÓN (HERO)
            contentHeader,                            // ENCABEZADO DE CONTENIDO
            contentBody,                              // CUERPO DEL CONTENIDO
            detalles.join(' | ')                       // DETALLES ADICIONALES
        ];
        rows.push(row.map(clean).join(','));
    }

    // --- 2. PROCESAR SECCIONES RAÍZ (Sobre Nosotros, Inicio, etc.) ---
    const rootKeys = ['About', 'PracticeAreas', 'Hero', 'Contact', 'Process'];
    rootKeys.forEach(key => {
        if (data[key]) {
            const section = data[key];
            const nombreSeccion = traduccionPaginas[key.toUpperCase()] || key.toUpperCase();
            
            const row = [
                nombreSeccion,
                "Sección General",
                section.title || section.prestige || section.expertise || "",
                section.subtitle || "",
                section.description || section.p1 || section.piDesc || "",
                "", // N/A
                "", // N/A
                "Contenido de la Página de Inicio"
            ];
            rows.push(row.map(clean).join(','));
        }
    });

    return rows;
}

try {
    const rawData = fs.readFileSync(JSON_FILE_PATH, 'utf8');
    const jsonData = JSON.parse(rawData);

    const dataRows = transformForManagement(jsonData);
    
    // Encabezados en Español
    const headers = [
        "SECCIÓN / PÁGINA",
        "TÍTULO META SEO",
        "TÍTULO PRINCIPAL (HERO)",
        "SUBTÍTULO (HERO)",
        "DESCRIPCIÓN (HERO)",
        "ENCABEZADO DE CONTENIDO",
        "CUERPO DEL CONTENIDO",
        "DETALLES ADICIONALES"
    ].map(h => `"${h}"`).join(',');

    // Añadir \ufeff (BOM) para que Excel reconozca tildes y eñes (á, é, í, ó, ú, ñ)
    const csvContent = '\ufeff' + [headers, ...dataRows].join('\n');

    fs.writeFileSync(OUTPUT_CSV_PATH, csvContent);
    console.log('✅ ¡Éxito! Reporte para Manager creado en español: ' + OUTPUT_CSV_PATH);
} catch (error) {
    console.error('❌ Error:', error.message);
}