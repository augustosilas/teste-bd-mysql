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
    const { PrimeiroNome, UltimoNome } = request.body;

    const sql = "INSERT INTO empregado(PrimeiroNome, UltimoNome) VALUES ?";
    const value = [[PrimeiroNome, UltimoNome]];

    connection.query(sql, [value], (err, results, fields) => {
      if (err) return console.log(err);

      return response.json(results);
    });
  },

  async update(request, response) {
    const { PrimeiroNome, UltimoNome } = request.body;
    const ID = parseInt(request.params.id);

    const sql =
      "UPDATE empregado\
                 SET PrimeiroNome = ?, UltimoNome = ?\
                 WHERE ID = ?;";
    const value = [PrimeiroNome, UltimoNome, ID];
    connection.query(sql, value, (err, results, fields) => {
      if (err) return console.log(err);

      return response.json({ message: "Updated successfully" });
    });
  },

  async delete(request, response) {
    const id = parseInt(request.params.id);

    const sql = "DELETE FROM empregado where ID = ?";

    connection.query(sql, [id], (err, result, fields) => {
      if (err) throw err;

      return response.json(fields);
    });
  },
};
