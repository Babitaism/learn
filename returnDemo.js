const express = require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
// app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: true }));

const connectionStr = mysql.createConnection({
  host: 'localhost', user: 'root',
  password: 'babita_360703', database: 'babita_first_web'
})

//connect to mysql
connectionStr.connect(err => {
  if (err) {
    throw err
  }
  console.log("MYSQL Connected")
})

//Create Database

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

// routes
// start server -- npm start
// domain http://127.0.0.1:3000/

app.get("/babita-form", (req, res) => {
  console.log(__dirname)
  res.sendFile(__dirname + '/index.html');
});

app.get("/getUserDetails", (req, res) => {
  let sql = " Select * from users;"
  connectionStr.query(sql, function (err, result) {
    if (err) {
      throw err;
    }

    let header = `<tr>
  <th>name</th>
  <th>address</th>
  <th>phone</th>
  <th>dob</th>
</tr>`
let tableBody;
let arr = [{name: 'a', add: 'hgf', ph: 12, bod: 'yr'},
{name: 'a', add: 'hgf', ph: 12, bod: 'yr'},
{name: 'a', add: 'hgf', ph: 12, bod: 'yr'}]
    for (i in arr) {

      `<tr>
      <td>${arr[i].name}</td>
      <td> ${arr[i].add}</td>
      <td>${arr[i].ph}</td>
      <td>${arr[i].dob}</td>
  </tr>`
}

res.send(`<style>
table, th, td {
  border:1px solid black;
}
</style>
<table>
    ${header}
    ${tableBody}
</table>`


  )
    //res.send(`<p>${names}${add}${phone}${dateOfBirth}</p>`)
  });
})
app.post('/babita-form', (req, res) => {
  console.log(req.body)

  let dob = new Date(req.body.DOB);
  console.log(connectionStr)

  //calculate month difference from current date in time
  let month_diff = Date.now() - dob.getTime();
  //convert the calculated difference in date format
  let age_dt = new Date(month_diff);
  //extract year from date
  let year = age_dt.getUTCFullYear();
  //now calculate the age of the user
  let age = Math.abs(year - 1970);
  //display the calculated age
  console.log("Age of the date entered: " + age + " years");
  //  console.log(new Date()-req.body.DOB)
  //res.json({ message: 'form submitted' })




  let name = req.body.name
  let address = req.body.address
  let phone = req.body.phone
  let dobb = req.body.DOB

  let sql = `INSERT INTO users (name, address, phone, dob) VALUES ("${name}","${address}","${phone}","${dobb}")`
  connectionStr.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  return res.redirect('/');
})

function onSelect(checkbox){
  let checkbox = document.getElementById("checkbox")
  let button = document.getElementById("btn");
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener( "change", () => {
      button.disabled = false;
      for (let i = 0; i < checkbox.length; i++) {
        if ( checkbox[i].checked == false )
        button.disabled = true;
     }
  });
}
}

function onSelect(userId){
let checkbox = document.getElementById("name_"+userId)
if(checkbox.checked){
  this.collectiveEdit.push(userId + " ")
}
else{
  this.collectiveRemove.push(userId + " ")
}
this.collectiveEdit.filter(function(e){
console.log(e)
return e ! = this.collectiveRemove
})
}









