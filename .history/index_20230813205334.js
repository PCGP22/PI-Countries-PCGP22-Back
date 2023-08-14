const server = require("./src/server");
const { conn } = require('./src/db.js');

const PORT = process.env.PORT || 5000;


conn.sync({ force: true }).then(() => {
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
