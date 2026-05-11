const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// MYSQL CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "service_booking_app"
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connected");
  }
});

/* ======================================
   TEST ROUTE
====================================== */

app.get("/", (req, res) => {
  res.send("Backend Working Successfully");
});

/* ======================================
   CUSTOMER SIGNUP
====================================== */

app.post("/customer-signup", (req, res) => {

  const { name, email, password } = req.body;

  const sql =
    "INSERT INTO customers(name,email,password) VALUES(?,?,?)";

  db.query(sql, [name, email, password], (err, result) => {

    if (err) {
      res.send(err);
    } else {
      res.send("Customer Registered");
    }

  });

});

/* ======================================
   CUSTOMER LOGIN
====================================== */

app.post("/customer-login", (req, res) => {

  const { email, password } = req.body;

  const sql =
    "SELECT * FROM customers WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {

    if (err) {
      res.send(err);
    } else {

      if (result.length > 0) {

        res.send({
          success: true,
          customer: result[0]
        });

      } else {

        res.send({
          success: false,
          message: "Invalid Email or Password"
        });

      }

    }

  });

});

/* ======================================
   BOOK SERVICE
====================================== */

app.post("/book-service", (req, res) => {

  const { customer_name, service_name } = req.body;

  const sql =
    "INSERT INTO bookings(customer_name,service_name,status) VALUES(?,?,?)";

  db.query(sql, [customer_name, service_name, "pending"], (err, result) => {

    if (err) {
      res.send(err);
    } else {
      res.send("Service Booked");
    }

  });

});

/* ======================================
   GET BOOKINGS
====================================== */

app.get("/bookings", (req, res) => {

  const sql =
    "SELECT * FROM bookings ORDER BY id DESC";

  db.query(sql, (err, result) => {

    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }

  });

});

/* ======================================
   ACCEPT BOOKING
====================================== */

app.put("/accept-booking/:id", (req, res) => {

  const id = req.params.id;

  const sql =
    "UPDATE bookings SET status='accepted' WHERE id=?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      res.send(err);
    } else {
      res.send("Booking Accepted");
    }

  });

});

/* ======================================
   DELIVER BOOKING
====================================== */

app.put("/deliver-booking/:id", (req, res) => {

  const id = req.params.id;

  const sql =
    "UPDATE bookings SET status='delivered' WHERE id=?";

  db.query(sql, [id], (err, result) => {

    if (err) {
      res.send(err);
    } else {
      res.send("Booking Delivered");
    }

  });

});

/* ======================================
   SERVER START
====================================== */

app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});