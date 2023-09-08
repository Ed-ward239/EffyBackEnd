module.exports = app => {
    const dataTable = require("../controllers/controller.js");
    var router = require(express).Router();

    // Create a new row of data
    router.post("/", dataTable.create);

    // Retrieve all data
    router.get("/", dataTable.findAll);

    // Retrieve all
    router.get("/", dataTable.findAllData);

    // Retrieve a single data with id
    router.get("/:id", dataTable.findOne);

    // Update data with id
    router.put("/:id", dataTable.update);

    // Delete a data with ID
    router.delete("/:id", dataTable.delete);

    // Delet all data
    router.delete("/id", dataTable.deleteAll);

    app.use('/api/dataTable', router);
};