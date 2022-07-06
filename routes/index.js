var express = require('express');
var router = express.Router();

const postModel = require("./users")

router.get('/', function(req, res) {
  postModel.find().then(function(posts){
    res.render('index',{posts})
  })
});

router.get('/create',function(req,res){
  res.render('create')
})


router.post("/makeproduct",function(req,res){
  postModel.create({
    productname:req.body.productname,
    productimage:req.body.productimage,
      producttheme:req.body.producttheme
  }).then(function(createdcart){
    
          res.redirect('/')
      })
  
  })


  router.get("/delete/:id",function(req,res){
    postModel.findOneAndDelete({
      id:req.params._id
    }).then(function(deleted){
     res.redirect('/')
    })
  })

  router.get("/update/:id",function(req,res){
    postModel.findOne({
      id:req.params._id
    }).then(function(updated){
      res.render('update',{updated})
    })
  })

  router.post("/updated/:id",function(req,res){
    postModel.findOneAndUpdate({
      id:req.params._id,
      productname:req.body.productname,
      producttheme:req.body.producttheme,
      productimage:req.body.productimage
    }).then(function(updated){
      console.log(updated)
      res.redirect('/')
    })
  })

module.exports = router;
