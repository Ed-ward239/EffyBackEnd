const db = require("../models");
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
        // euRev: req.body.euRev,
        // carnivalShare: req.body.carnivalShare,
        // officeSup: req.body.officeSup,
        // discount: req.body.discount,
        // execFolio: req.body.execFolio,
        // ssFee: req.body.ssFee,
        // ccFee: req.body.ccFee,
        // mealCharge: req.body.mealCharge,
        // paroleFee: req.body.paroleFee,
        // cashAdv: req.body.cashAdv,
        // cashPaid: req.body.cashPaid
    }

    // Save new data in the DB
    HfcData.create(hfcData).then(data => { res.send(data);})
                           .catch(err => {
                                res.status(500).send({
                                    message:"Error creating the Data" + err
                                });
                           });
};


exports.findAllData = async function findAllData(req, res) {
    try{
        const id = req.params.id; 
        const query = 'SELECT * FROM [dbo].[HFC_VOYAGES]';
        const res = await pool.req().query(query);
        return(res.recordset);
        await pool.close();
    }catch (err) {
        console.error('Error occurred', err);
    }
};

// Retrieve all data from the database.
// exports.findAll = (req, res) => {
//     HfcData.findAll({ where: condition })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving the data."
//             });
//         });
// };

// Find a single data with an id
// exports.findOne = async function findOne(req,res){
//     const id = req.params.id;
//     HfcData.findByPk(id)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving data with id=" + id 
//             });
//         });
// };

// Update data by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    HfcData.update(req.body,{where:{id: id}})
    .then(num => {
        if (num == 1){
            res.send({
                message: "Data was updated."
            });
        } else {
            res.send({
                message: `Cannot update data with id=${id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updateing data with id=" + id
        });
    });
};

// Delete a data with the specified id in the request
exports.delete = (req, res) =>{
    const id = req.params.id;
    HfcData.destroy({
        where: {id: id}
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: "Data was deleted."
            });
        } else {
            res.send({
                message: `Cannot delete data with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({message:"Could not delete data with id=" + id});
    });
};

// Delete All selected data from the DB.
exports.deleteAll = (req, res) => {
    HfcData.destroy({
        where: {},
        truncate : true // This will also empty the table's primary key autoincrement field
    })
    .then(nums => {
        res.send({ message: `${nums} row(s) were deleted.`});
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while deleting."
        });
    });
};

// Find all data from DB
// exports.findAllData = (req, res) => {
//     HfcData.findAll({ where: {voyageNum: true} })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Something went wrong..."
//         });
//     });
// };

