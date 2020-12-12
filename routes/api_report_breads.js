var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;
const { performance } = require('perf_hooks');

import LibMongo from "../libs/LibMongo"
import LibPagenate from "../libs/LibPagenate"
import LibReportBreads from "../libs/LibReportBreads"

/******************************** 
* 
*********************************/
router.get('/index', async function(req, res) {
    try{
        var bread_orders = []
        const collection = await LibMongo.get_collection("bread_orders" )
        var page = req.query.page;
        LibPagenate.init();
        var page_info = LibPagenate.get_page_start(page);       
console.log( "page=",  page, page_info ); 
        await collection.aggregate([
            {$skip: page_info.start },
            {$limit: page_info.limit },
            {$sort: {created_at: -1} },
            {
                $lookup: {
                    from: "breads",
                    localField: "bread_id",
                    foreignField: "_id",
                    as: "breads"
                }
            },
            {
                $group : { _id: "$bread_id", num_total: { $sum : "$order_num" }} 
            }

        ]).toArray().then((docs) => {
            bread_orders = docs
console.log(bread_orders);
        })
        var bread_ids = await LibReportBreads.get_bread_ids(bread_orders)
//console.log(bread_ids);
        var breads = await LibReportBreads.get_bread_items(bread_ids)
//        console.log(breads);
        var report_items = await LibReportBreads.get_report_items(breads , bread_orders)
// console.log(report_items);
        var param = LibPagenate.get_page_items(report_items )
        res.json(param);
    } catch (err) {
        console.log(err);
        res.status(500).send();    
    }   
});


/******************************** 
* 
*********************************/
router.get('/tasks_test', function(req, res) {
});


module.exports = router;
