const express =  require("express")
const router = express.Router()

router.get('/',(req,res)=>{
      res.render('home')
}); 

router.get('/exercise',(req,res)=>{
        res.render('Exercise');
})


router.get('/diet',(req,res)=>{
      res.render('Diet');
})



router.get('/sleep',(req,res)=>{
      res.render('Sleep');
})



router.get('/affilate',(req,res)=>{
     res.redirect("https://amzn.to/3DfDbmm")
})




router.get('/insta',(req,res)=>{
      res.redirect("https://www.instagram.com/_akshay__mahajan/")
 })
 


 router.get('/linkedin',(req,res)=>{
      res.redirect("https://www.linkedin.com/in/akshay-mahajan-589535243/")
 })
 


 



module.exports = router