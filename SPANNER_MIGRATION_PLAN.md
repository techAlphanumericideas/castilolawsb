# Implementation Plan: Migrating Translations to Google Cloud Spanner

This plan outlines the steps to move localization content from local JSON files (`messages/en.json`, `messages/es.json`) to a Google Cloud Spanner database for dynamic management and scalability.

## 1. Prerequisites & Setup

### A. Cloud Spanner Instance
The user must create a Spanner instance and database in the Google Cloud Console or via CLI:
```bash
# Create Instance
gcloud spanner instances create virtuoso \
    --config=regional-us-central1 \
    --description="Translation Database" \
    --processing-units=100

# Create Database
gcloud spanner databases create castillolawsb --instance=virtuoso
```

### B. Database Schema
Execute the following DDL in the Spanner database:
```sql
CREATE TABLE Translations (
  locale STRING(10) NOT NULL,
  messages JSON NOT NULL
) PRIMARY KEY (locale);
```

## 2. Dependency Installation
Install the Google Cloud Spanner SDK:
```bash
npm install @google-cloud/spanner
```

## 3. Core Implementation

### A. Spanner Utility (`lib/spanner.ts`)
Created a utility for fetching translations from the database. It handles connection pooling and querying the JSON blob.

### B. Migration Script (`scripts/migrate-to-spanner.mjs`)
Created a script to automate the upload of existing `en.json` and `es.json` files to Spanner.
**How to run:**
```bash
# Set environment variables if different from defaults
export GOOGLE_CLOUD_PROJECT="alphanumerictoolsbackend"
export SPANNER_INSTANCE="virtuoso"
export SPANNER_DATABASE="castillolawsb"

node scripts/migrate-to-spanner.mjs
```

## 4. Application Integration

### A. Update `i18n/request.ts`
Modify the `next-intl` configuration to fetch messages from Spanner instead of the filesystem.

```typescript
import {getTranslations} from '../lib/spanner';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = (await requestLocale) || routing.defaultLocale;
  
  // Try fetching from Spanner first
  const messages = await getTranslations(locale);
  
  return {
    locale,
    messages: messages || (await import(`../messages/${locale}.json`)).default
  };
});
```

### B. Caching (Highly Recommended)
Spanner queries have latency. To optimize:
- Use Next.js `unstable_cache` for server-side caching.
- Or implement a simple in-memory cache in `lib/spanner.ts`.

## 5. Verification
1. Run the migration script and verify data exists in Spanner Console.
2. Start the app (`npm run dev`).
3. Check the website; it should render all text from Spanner.
4. (Optional) Update a value in Spanner and refresh the page to see the change live (if no cache matches).
