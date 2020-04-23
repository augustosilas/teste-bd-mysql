const connection = require("../database/connection");

module.exports = {
  async show(request, response) {
    const { email, senha, nome } = request.body;

    const sql = "SELECT";
  },

  async create(request, response) {
    const { email, senha, nome } = request.body;

    const sql = "INSERT INTO InfoEmpregado(email, senha, nome) VALUES ?";
    const values = [email, senha, nome];

    connection.query(sql, values, (err, result, fields) => {
      if (err) throw err;
      return response.json({ status: "Criado com sucesso!" });
    });
  },
};
