const db = required("../models");
const HfcData = db.hfcData;
const Op = db.Sequelize.Op;

// Create and Save a new set of data
exports.create = (req, res) => {
    // Validate request
    if (!req.body.data) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create new data
    const hfcData = {
        shipName: req.body.shipName,
        voyageNum: req.body.voyageNum,
        date: req.body.date,
        effyShare: req.body.effyShare,
        statusPaid: req.body.statusPaid,
        editor: req.body.editor,
        revSS: req.body.revSS,
        revCC: req.body.recCC,
        euRev: req.body.euRev,
        carnivalShare: req.body.carnivalShare,
        officeSup: req.body.officeSup,
        discount: req.body.discount,
        execFolio: req.body.execFolio,
        ssFee: req.body.ssFee,
        ccFee: req.body.ccFee,
        mealCharge: req.body.mealCharge,
        paroleFee: req.body.paroleFee,
        cashAdv: req.body.cashAdv,
        cashPaid: req.body.cashPaid
    }

    // Save new data in the DB
    HfcData.create(hfcData).then(data => { res.send(data);})
                           .catch(err => {
                                res.status(500).send({
                                    message:"Error creating the Data" + err
                                });
                           });
};

// Retrieve all datas from the database.
