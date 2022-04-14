const { request } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
//const coffeeTemplateCopy = require('../models/CoffeeType')
const bcrypt = require("bcrypt")

router.post('/register', async (request, response) => {

   const saltPassword = await bcrypt.genSalt(10)
   const securePassword = await bcrypt.hash(request.body.password,saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        //collecting data from the user
        lastname: request.body.lastname,
        firstname: request.body.firstname,
        username: request.body.username,
        password: securePassword,
        email: request.body.email,
    })

    //now saving the above data
    signedUpUser.save()
    .then(data => {
        response.json(data)
        console.log(request.body)
    })
    .catch(error => {
        response.json(error)
    })
})

// Get a list of register from the database
router.get('/register',function(req,res,next){
    signUpTemplateCopy.find({}).then(function(signUpTemplateCopy){
        res.send(signUpTemplateCopy);
    }).catch(next);
});





/*
router.post('/coffee', (req,res) => {

    const cofeeDetail = new coffeeKind({
        coffee1: req.body.coffee1,
        coffee2: req.body.coffee2,
        coffee3: req.body.coffee3,
    })
    //now saving the above data
    cofeeDetail.save()
    .then(data => {
        response.json(data)
        console.log(request.body)
    })
    .catch(error => {
        response.json(error)
    })
});

*/

/*
//Commment from users
router.post('/save', (req, res) => ({
    const data= req.body;

    const newCommentPost = new CommentPost(data);
    
    newCommentPost.save((error) => {
        if (error) {
            response.status(500).json({
               msg: 'Sorry internal server errors!!'
           })

        }else{
           response.json({
               msg: 'Your data has been saved!!'
           })
        }
    });

}));
    
*/


/*
router.post('/save', (req,res) => {
    console.log('Body: ', req.body);
    res.json({
        msg: 'We received your data!!'
    });
});
*/


/*
router.get('/name', (req, res) => {
    const data = {
        username: 'Dereje',
        age: 10
    }
    res.json(data);
})
*/

/*
router.get('/display', (req, res) => {
// router.get(function (req, res) {
   ClusterFirst.Collections.find({username: req.query.username}, {username: 1})
    .exec(function (err, user) {
    if (err) {
      console.log(err);
      
      res.json(err);
    } else {
      console.log(user.data);
      res.json(user.data);
    }
  });
});

*/

// router.get('/display',(req, res) => {
// // router.get(function (req, res) {
//    signUpTemplateCopy.find({username: req.query.username}, {username: 1})
//     .exec(function (err, user) {
//     if (err) {
//       console.log(err);
//       res.json(err);
//     } else {
//       console.log(user.data);
//       res.json(user.data);
//     }
//   });
// });
  





// router.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   connection.query(
//     "SELECT * FROM dcafe.employee WHERE username = ?;",
//     username,
    
//     async function (error, results, fields) {         
//         if (error) {        
//             results.send({          
//             "code":400,          
//             "failed":"error occurred",          
//             "error" : error        
//           })      
//         }else{        
//               if(results.length > 0){          
//                 const comparison = await bcrypt.compare(password, results[0].password)          
//                 if(comparison){ 
//                   req.session.user = results;
//                   console.log(req.session.user);
//                   res.send(results);
//                   //  res.send({                               
//                   // "success":"login successful",                                
//                   // "userName": results[0].username,                        
//                   //})  
                
//                 } else {
//                     res.send({ message: "Wrong username/password combination!" });
//                 }
//              }else{          
//               res.send({message: "User doesn't exist"});        
//             }     
//         }
//       }
//     );
// });


// router.get('/order', (req, res) => {
    
//         connection.query(signUpTemplateCopy, (err, response) =>{
//             if(err) console.log(err)
//             else {
//                 //console.log(req.body)
//                 console.log(response)
//                 res.send(response)
//             }
//         })
// })

module.exports = router