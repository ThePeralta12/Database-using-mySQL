
var mysql = require('mysql');
//THIS WILL CONNECT TO THE DATABASE
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "assignment_4"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!!!!");


//THIS IS THE PERSONAL INFOMATION TABLE...

 var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, Title VARCHAR(255), FirstName VARCHAR(255), Surname VARCHAR(255), Mobile VARCHAR(255), Email_Address VARCHAR(255),address_id VARCHAR(3))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
    
   	var sql = "INSERT INTO customers (Title, FirstName, Surname, Mobile, Email_Address,address_id) VALUES ?";
  var values = [
    ['Dr', 'Carl','Peralta','0877762087','carl.peralta.2019@mumail.ie','1'],
    ['Mr', 'Kobe','Lebron','0877762123','kobe.bryant.2016@mumail.ie','2'],
    ['Mrs', 'Ann','Summers','0877123087','ann.summers.2018@mumail.ie','3'],
    ['Ms', 'Jeana','Perez','0812362087','jeana.perez.2019@mumail.ie','1'],  
    ['Mr', 'Tony','Stark','0877712123','tony.stark.2019@mumail.ie','3'],
    ['Dr', 'Otto','Matter','0871232081','otto.matter.2019@mumail.ie','2'],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });


//THIS IS THE SELECT FROM Customer TABLE

 con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });


 var sql = "INSERT INTO customers (Title, FirstName, Surname, Mobile, Email_Address,address_id) VALUES ('Mx', 'Carrick','Glen','0863762123','carrick.glen.2019@mumail.ie','4')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
var sql = "INSERT INTO customers (Title, FirstName, Surname, Mobile, Email_Address,address_id) VALUES ('Miss', 'Erika','Solonga','0863765223','ericka.solonga.2018@mumail.ie','4')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });


//THIS IS THE ADDRESS TABLE......

 var sql_address = "CREATE TABLE address (address_id INT AUTO_INCREMENT PRIMARY KEY, Address_Line_1 VARCHAR(255), Address_Line_2 VARCHAR(255), Town VARCHAR(255), County VARCHAR(255), EirCode VARCHAR(255))";
  con.query(sql_address, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
 
   	var sql = "INSERT INTO address (Address_Line_1, Address_Line_2, Town, County, EirCode) VALUES ?";
  var values = [
    ['123 Yellow Lane', 'Balcoon','Ballymun','Dublin','D7 HE14'],
    ['121 Blue Road', 'Naas','Ballyshannon','Kildare','KL HE11'],
    ['4 red Lane', '','Ballybough','Dublin','D1 HE14'],
    ['63 Mount Park', 'Corduff','Blanchardstown','Sligo','']
  
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });


//THIS IS THE SELECT FROM Address TABLE

con.query("SELECT * FROM address", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });


//THIS IS THE SHIPPING TABLE......

 var sql_shipping = "CREATE TABLE shipping (shipping_id INT AUTO_INCREMENT PRIMARY KEY, Shipping_Line_1 VARCHAR(255), Shipping_Line_2 VARCHAR(255), Town VARCHAR(255), County VARCHAR(255), EirCode VARCHAR(255))";
  con.query(sql_shipping, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
 


   	var sql = "INSERT INTO shipping (Shipping_Line_1, Shipping_Line_2, Town, County, EirCode) VALUES ?";
  var values = [
    ['123 Yellow Lane', 'Balcoon','Ballymun','Dublin','D7 HE14'],
    ['121 Blue Road', 'Naas','Ballyshannon','Kildare','KL HE11'],
    ['4 red Lane', '','Ballybough','Dublin','D1 HE14'],
    ['63 Mount Park', 'Corduff','Blanchardstown','Sligo','']
      ];

  con.query(sql, [values], function (err, result) {
    if (err) throw	 err;
    console.log("Number of records inserted: " + result.affectedRows);
  });

//THIS IS THE SELECT FROM Shipping TABLE

con.query("SELECT * FROM shipping", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });


  // con.query("SELECT * FROM address WHERE County = 'Dublin'", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });


  // var sql = "UPDATE customers SET Title = 'Miss' WHERE Title = 'Ms'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result.affectedRows + " record(s) updated");
  // });


  // var sql = "UPDATE customers SET Title = 'Mister' WHERE Title = 'Mr'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result.affectedRows + " record(s) updated");
  // });

 // 
  // var sql = "UPDATE customers SET Email_Address = 'kobe.lebron.2017@mumail.ie' WHERE Email_Address = 'kobe.bryant.2016@mumail.ie'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result.affectedRows + " record(s) updated");
  // });

  //  var sql = "UPDATE address SET Address_Line_1 = '4 Red Lane' WHERE Address_Line_1 = '4 red Lane'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result.affectedRows + " record(s) updated");
  // });

 // var sql = "UPDATE address SET Town = 'Calry' WHERE Town = 'Blanchardstown'";
 //  con.query(sql, function (err, result) {
 //    if (err) throw err;
 //    console.log(result.affectedRows + " record(s) updated");
 //  });


 // var sql = "UPDATE shipping SET Town = 'Baldoyle' WHERE Town = 'Ballymun'";
 //  con.query(sql, function (err, result) {
 //    if (err) throw err;
 //    console.log(result.affectedRows + " record(s) updated");
 //  });

 // var sql = "UPDATE shipping SET Shipping_Line_1 = '4 Green Lane' WHERE Shipping_Line_1 = '4 red Lane'";
 //  con.query(sql, function (err, result) {
 //    if (err) throw err;
 //    console.log(result.affectedRows + " record(s) updated");
 //  });


  // var sql = "DELETE FROM customers WHERE id = '5'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records deleted: " + result.affectedRows);
  // });

  //  var sql = "DELETE FROM address WHERE County = 'Kildare'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records deleted: " + result.affectedRows);
  // });

  //    var sql = "DELETE FROM shipping WHERE EirCode = 'D1 HE14'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records deleted: " + result.affectedRows);
  // });

});

