import Sequelize from "sequelize";

const dbConfig = {
  HOST: "database-2.cfkogq6qou64.ap-south-1.rds.amazonaws.com",
  USER: "postgres",
  PASSWORD: "Tatva123456789",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// Initialize Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: true,                // ✅ Force SSL
      rejectUnauthorized: false     // ✅ Allow self-signed cert
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging: (msg) => console.log(`[Sequelize Log] ${msg}`), // Custom logging
});


// ✅ Connection Hooks
sequelize.beforeConnect((config) => {
  console.log(`[Hook] Before connecting to DB:`, config.host);
});

sequelize.afterConnect((connection) => {
  console.log(`[Hook] Successfully connected to DB`);
});

sequelize.beforeDisconnect((connection) => {
  console.log(`[Hook] Before disconnecting from DB`);
});

sequelize.afterDisconnect((connection) => {
  console.log(`[Hook] Disconnected from DB`);
});
export default sequelize;
