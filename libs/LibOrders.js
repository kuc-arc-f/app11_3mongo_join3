
// LibOrders
import LibMongo from "../libs/LibMongo"
var ObjectID = require('mongodb').ObjectID;

//
export default {
    get_serach_items :function(items, key){
        try{
            var data =[]
            var max = 1000
            items.forEach(function(item){
//console.log( item.title , key )
                if ( item.title.indexOf(key) != -1 ) {
                    console.log(data.length)
                    if(data.length < max){
                        data.push(item)
                   }
                }
            });        
            return data            
        } catch (e) {
            console.log(e);
            return null;
        }      
    },
    add_items :async function(items){
        try{
            var book_id = "5fb31ae87068fbef60f9715a"
            const collection = await LibMongo.get_collection("orders" )
            items.forEach(async function (item) {
                var item = {
                    book_id: new ObjectID( book_id ) ,  
                    order_num: 1,
                    created_at: new Date(),
                };
//                console.log( item )
                await collection.insertOne(item);                
            });
            return true;  
        } catch (e) {
            console.log(e);
            return false;
        }      

    },    

}
