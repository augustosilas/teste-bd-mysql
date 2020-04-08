const express = require("express");
const bodyParser = require("body-parser");
// const mysql = require("mysql");

const routes = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(routes);

// function addRows(conn) {
//   const sql = "INSERT INTO empregado(PrimeiroNome, UltimoNome) VALUES ?";
//   const values = [
//     ["Jelson", "Carmo"],
//     ["Ana", "Carmo"],
//     ["Samuel Lucas", "Carmo"],
//     ["Silas Augusto", "Carmo"],
//     ["Jessé Marcos", "Carmo"],
//   ];

//   conn.query(sql, [values], (err, results, fields) => {
//     if (err) return console.log(err);
//     console.log("adicionou registros");
//     conn.end();
//   });
// }

// connection.end();
app.listen(3000);
