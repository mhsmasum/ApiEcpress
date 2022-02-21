
const dbConn = require('../config/db.config');
var  Category = function (category){
    
    this.name = category.name;
    this.description = category.description;
    this.imageUrl = category.imageUrl;
   
}

Category.CreateNew = function(newCategory , result  ){

    
    dbConn.query("INSERT INTO category set ?", newCategory, function (err, res){
        if(err) {
            
            result(err, null);
          }
          else{
            
            result(null, res.insertId);
          }
    });
    
    // if(err) {
    //     console.log("error: ", err);
    //     result(err, null);
    //   }
    //   else{
    //     console.log("category created: ", newCategory);
    //     result(null, newCategory);
    //   }

    

}
module.exports = Category;