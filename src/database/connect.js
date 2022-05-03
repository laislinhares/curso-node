const mongoose = require("mongoose");

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cursonode.zrwc0.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar como banco de dados: ",
          error
        );
      }

      console.log("Conexão ao banco de dados realizada com sucesso");
    }
  );
};

module.exports = connectToDataBase;
