/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://rudraturtle7:So4aBc2AmTvd@ep-lucky-king-64359755.us-east-2.aws.neon.tech/content-generator?sslmode=require'
    }
  };