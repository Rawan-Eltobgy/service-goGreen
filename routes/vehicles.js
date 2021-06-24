var vehicles = require('../vehicleList.json');
var router = require('express').Router();

router.get("/", (req, res) => {
    const { page = 1, limit = 7, filter } = req.query;
    let startingDataIndex = Number(limit) * (Number(page) - 1)
    let vehicleDataResult = vehicles
        //Enter the condition if filter not empty
    if (filter) {
        let filterData = filter.toLowerCase()
        vehicleDataResult = vehicles.filter((vehicle) => {
            console.log("vehicle is ", vehicle)
            if (vehicle.brand.toLowerCase().includes(filterData) || vehicle.model.toLowerCase().includes(filterData)) {
                return true;
            }
        })
    }
    res.status(200).send(vehicleDataResult.slice(startingDataIndex, startingDataIndex + Number(limit)))
})
module.exports = router;