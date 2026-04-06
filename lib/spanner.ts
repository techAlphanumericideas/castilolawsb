import { Spanner } from '@google-cloud/spanner';

const projectId = process.env.GOOGLE_CLOUD_PROJECT || 'alphanumerictoolsbackend';
const instanceId = process.env.SPANNER_INSTANCE || 'virtuoso';
const databaseId = process.env.SPANNER_DATABASE || 'castillolawsb';
const keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS || './gcp-key.json';

const spanner = new Spanner({ projectId, keyFilename: keyFile });
const instance = spanner.instance(instanceId);
const database = instance.database(databaseId);

export async function getTranslations(locale: string) {
  const query = {
    sql: 'SELECT messages FROM Translations WHERE locale = @locale',
    params: { locale },
  };

  try {
    const [rows] = await database.run(query);
    if (rows.length === 0) return null;

    // rows[0][0] is the JSON column
    return rows[0].toJSON().messages;
  } catch (error) {
    console.error(`Error fetching translations for [${locale}] from Spanner:`, error);
    return null;
  }
}

export async function saveTranslationsSchema(locale: string, messages: any) {
  const table = database.table('Translations');
  try {
    await table.upsert([
      { locale, messages: messages }
    ]);
    console.log(`✅ Translations for [${locale}] synced to Spanner.`);
  } catch (error) {
    console.error(`❌ Error syncing translations for [${locale}]:`, error);
  }
}
