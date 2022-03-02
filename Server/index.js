const express = require('express');
const cors = require('cors');

const bcrypt = require("bcrypt")
const saltRounds = 10;

const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const port = process.env.PORT || 4000;

const connection = require('./db');


app.use(cookieParser());
app.use(cors());    //this is to allow our api for cross-orign resource sharing
app.use(bodyParser.json());
app.use(cors());

app.use(
  cors({
    origin: ["http://localhost:19006"],
    methods: ["GET", "POST"],
    credentials: true,
  })
)

app.use(bodyParser.urlencoded({ extended: true }))

app.use(
  session({
    key: "userID",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
    //httpOnly: true,
    //secure: true,
    //ephemeral: true.valueOf,
  })
);


 
app.post('/register', (req,res) => {
  const lastname = req.body.lastname;
  const firstname = req.body.firstname;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    connection.query(
    "INSERT INTO dcafe.employee (lastname, firstname,username, password, email) VALUES (?, ?, ?, ?, ?)",
    [lastname, firstname, username, hash, email],
    
    (err, result) => {
        if (err) {
       console.log(err);
     }else{
        console.log(req.body)

     }
      }
    );
  });
});




app.get("/register", (req, res) => {
  if (req.session.user) {
    res.send({ registerIn: true, user: req.session.user });
  } else {
    res.send({ registerIn: false });
  }
});


// app.use('/login', (req,res) => {
//   res.send({
//     token: 'test000'
//   })
// })


app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    "SELECT * FROM dcafe.employee WHERE username = ?;",
    username,
    async function (error, results, fields) {         
        if (error) {        
            results.send({          
            "code":400,          
            "failed":"error occurred",          
            "error" : error        
          })      
        }else{        
              if(results.length > 0){          
                const comparison = await bcrypt.compare(password, results[0].password)          
                if(comparison){ 
                  req.session.user = results;
                  console.log(req.session.user);
                  res.send(results);
                  //  res.send({                               
                  // "success":"login successful",                                
                  // "userName": results[0].username,                        
                  //})  
                
                } else {
                    res.send({ message: "Wrong username/password combination!" });
                }
             }else{          
              res.send({message: "User doesn't exist"});        
            }     
        }
      }
    );
});



app.post("/sale", (req, res) => {
   const username = req.body.username;
   const customername = req.body.customername;
   const orderType = req.body.orderType;
   const orderSizePrice = req.body.orderSizePrice;
   const orderCount = req.body.orderCount;
   const subtotal = req.body.subtotal;
   const tax = req.body.tax;
   const total = req.body.total;

  
    connection.query(
      "INSERT INTO dcafe.sale (username, customername, orderType, orderSizePrice, orderCount, subtotal,tax, total) VALUES (?,?,?,?,?,?,?,?)",
      [username, customername, orderType, orderSizePrice, orderCount,subtotal,tax, total],
      (err, result) => {
        console.log(err);
        console.log(req.body)
      }
    );
  
});


const SELECT_ALL_EMPLOYEE_QUERY = 'SELECT * FROM employee';
app.get('/regisry', (rea,res) => {
    connection.query(SELECT_ALL_EMPLOYEE_QUERY, (err,results) => {
        if(err){
            return res.send(err);
        } else {
            return res.json({
                data: results
            })
        }

    });

 });


app.get('/order/coffee', (req, res) => {
    const TASK_QUERY = "SELECT * FROM dcafe.coffee";
        connection.query(TASK_QUERY, (err, response) =>{
            if(err) console.log(err)
            else {
                //console.log(req.body)
                console.log(response)
                res.send(response)
            }
        })
})

app.post("/addSize", (req, res) => {
  const size = req.body.size;

    connection.query(
      "INSERT INTO dcafe.sale (size) VALUES (?)",
      [size],
      (err, result) => {
        console.log(err);
      }
    );
});


app.get('/order/coffeeSize', (req, res) => {
    const TASK_QUERY = "SELECT * FROM dcafe.coffeeSize";
        connection.query(TASK_QUERY, (err, response) => {
            if(err) console.log(err)
            else {
                //console.log(req.body)
                console.log(response)
                res.send(response)
            }
        })
})



// app.get('/deleteOrder', (req,res) => {
//     res.send('delete Order')
// })


  app.listen(port, () => {
      console.log( `running on port : ${port}`);
  })















