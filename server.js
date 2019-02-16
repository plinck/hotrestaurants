// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

var tables = [
    {
      routeName: "table1",
      number: "Table #1",
      customerID: "1234",
      customerName: "Paul Linck",
      customerEmail: "paul@linck.net",
      phoneNumber: "404-555-1212"
    },
    {
        routeName: "table2",
        number: "Table #2",
        customerID: "1234",
        customerName: "Paul Linck",
        customerEmail: "paul@linck.net",
        phoneNumber: "404-555-1212"
      },
      {
        routeName: "table3",
        number: "Table #1",
        customerID: "1234",
        customerName: "Paul Linck",
        customerEmail: "paul@linck.net",
        phoneNumber: "404-555-1212"
      },
      {
        routeName: "table4",
        number: "Table #1",
        customerID: "1234",
        customerName: "Paul Linck",
        customerEmail: "paul@linck.net",
        phoneNumber: "404-555-1212"
      },
      {
        routeName: "table5",
        number: "Table #1",
        customerID: "1234",
        customerName: "Paul Linck",
        customerEmail: "paul@linck.net",
        phoneNumber: "404-555-1212"
      }
  ];
  var waitlist = [
    {
      customerID: "1234",
      customerName: "Paul Linck",
      customerEmail: "paul@linck.net",
      phoneNumber: "404-555-1212"
    },
    {
      customerID: "4567",
      customerName: "Cordelle",
      customerEmail: "cordelle@example.com",
      phoneNumber: "678-555-1212"
    },
  ];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(__dirname + "/public"));


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/tables", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "public/tables-final.html"));
  });

  app.get("/reserve", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "public/reserve.html"));
  });

  // Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  
  // Displays waitlist
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });
  
  // Displays a single table, or returns false
  app.get("/api/tables/:table", function(req, res) {
    var table = req.params.table;
  
    console.log(table);
  
    for (let i in tables) {
      if (table === tables[i].routeName) {
        return res.json(tables[i]);
      }
    }
  
    return res.json(false);
  });
  
  app.post("/api/tables", function(req, res) {
    let newReservation = req.body;
    console.log(newReservation);
  
    let newTable = {};
  
    if (tables.length < 5) {
      newTable.routeName = (`table${tables.length}`)
      newTable.routeName = newTable.routeName.replace(/\s+/g, "").toLowerCase();
  
      newTable.number = (`Table #${tables.length}`);
      newTable.customerName = newReservation.customerName;
      newTable.phoneNumber = newReservation.phoneNumber;
      newTable.customerEmail = newReservation.customerEmail;
      newTable.customerID = newReservation.customerID;
  
      console.log(newTable);
      tables.push(newTable);
  
      res.json(newTable);
    } else {
      waitlist.push(newReservation);
      
      res.end();
    }
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

  
