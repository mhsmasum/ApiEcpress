

const Category = require('../models/category.model');
const multer  = require('multer');

const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
      console.dir(file);
      cb (null, 'uploads/');  
    },
    filename: (req, file, cb) => {
    console.log(new Date())
      cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
    
  });

  const upload = multer({storage});

    module.exports = {
        //test method
        test: function(req, res) {
            res.send('from category controller')
        },
        createnew : function(req, res ) {

             
                // console.log(req.body.name);
                // console.log(req.file);
                console.log(req.file);
              const newCategory = new Category({name:req.body.name , description:req.body.description , imageUrl:req.file.path});
              
            Category.CreateNew( newCategory, function(err, data){

                if(err){
                     res.status(500).send(err);
                    
                }
                else{
                    // console.dir(data);
                    // res.status(200).send(data);
                    
                    //upload.single('image'),
                    
                      res.status(200).json({'success' : true, 'result': newCategory})
                 
                }
            });
            
        }
    }