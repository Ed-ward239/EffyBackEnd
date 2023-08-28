module.exports = {
    HOST: "effysql1.cudlgss5lr6m.us-east-2.rds.amazonaws.com",
    PORT: "1434",
    USER: "shipacctportaldev",
    PASSWORD: "BFXTczfjG+TbeG%!",
    DB: "EffyShipAcctPortalDevDB",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};