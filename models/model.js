module.exports = (sequelize, Sequelize) => {
    const HFCdata = sequelize.define("hfcData", {
        id: {
            type: Sequelize.INTEGER
        },
        shipname: {
            type: Sequelize.STRING
        },
        voyageNum: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE
        },
        effyShare: {
            type: Sequelize.MONEY
        },
        statusPaid: {
            type: Sequelize.STRING
        },
        editedBy: {
            type: Sequelize.STRING
        },
        revSS: {
            type: Sequelize.MONEY
        },
        revCC: {
            type: Sequelize.MONEY
        },
        euRev: {
            type: Sequelize.MONEY
        },
        carnivalShare: {
            type: Sequelize.MONEY
        },
        officeSup: {
            type: Sequelize.MONEY
        },
        discount: {
            type: Sequelize.MONEY
        },
        execFolio: {
            type: Sequelize.MONEY
        },
        ssFee: {
            type: Sequelize.MONEY
        },
        ccFee: {
            type: Sequelize.MONEY
        },
        mealCharge: {
            type: Sequelize.MONEY
        },
        paroleFee: {
            type: Sequelize.MONEY
        },
        cashAdv: {
            type: Sequelize.MONEY
        },
        cashPaid: {
            type: Sequelize.MONEY
        }
    });
    return HFCdata;
};