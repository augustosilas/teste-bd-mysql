const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const sql = "SELECT * FROM empregado";
    connection.query(sql, (error, results, fields) => {
      if (error) response.json(error);

      return response.json(results);
    });
  },

  async create(request, response) {
    const { PrimeiroNome, SegundoNome } = request.body;
    console.log(PrimeiroNome, SegundoNome);
    const sql = "INSERT INTO empregado(PrimeiroNome, UltimoNome) VALUES ?";
    const value = [[PrimeiroNome, SegundoNome]];

    connection.query(sql, [value], (err, results, fields) => {
      if (err) return console.log(err);

      return response.json(results);
    });
  },
};
