var vehicles = require('../vehicleList.json');
var router = require('express').Router();
//if calling /goGreen will add default page, limit to the url
//Limit -> number of returned elements
//startingIndex= (7* (pages -1)) 
//
router.get("/", (req, res) => {
    const { page = 1, limit = 7 } = req.query
    let startingDataIndex = Number(limit) * (Number(page) - 1)
        // console.log(startingDataIndex,startingRecipeIndex+limit,limit)
    res.status(200).send(vehicles.slice(startingDataIndex, startingDataIndex + Number(limit)))
})
module.exports = router;