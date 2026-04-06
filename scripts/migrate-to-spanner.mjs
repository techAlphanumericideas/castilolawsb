import fs from 'fs';
import path from 'path';
import 'dotenv/config';
import { Spanner } from '@google-cloud/spanner';

// CONFIGURATION
const projectId = process.env.GOOGLE_CLOUD_PROJECT || 'alphanumerictoolsbackend';
const instanceId = process.env.SPANNER_INSTANCE || 'virtuoso';
const databaseId = process.env.SPANNER_DATABASE || 'castillolawsb';
const keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS || './gcp-key.json';

const spanner = new Spanner({ projectId, keyFilename });
const database = spanner.instance(instanceId).database(databaseId);

async function syncTranslations() {
  const locales = ['en', 'es'];
  const table = database.table('Translations');

  for (const locale of locales) {
    const filePath = path.join(process.cwd(), 'messages', `${locale}.json`);
    
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ Warning: ${filePath} not found.`);
      continue;
    }

    try {
      const messages = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      await table.upsert([
        { 
          locale, 
          messages: messages 
        }
      ]);
      
      console.log(`✅ Successfully synced [${locale}] to Cloud Spanner.`);
    } catch (error) {
      console.error(`❌ Error syncing [${locale}]:`, error);
    }
  }
}

syncTranslations().then(() => {
  console.log('Migration complete.');
  process.exit(0);
}).catch(err => {
  console.error('Fatal error during migration:', err);
  process.exit(1);
});
