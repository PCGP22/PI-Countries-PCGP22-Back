const server = require("./src/server");
const { conn } = require('./src/db.js');

const port = process.env.PORT || 3000;
console.log(port)

conn.sync({ force: true }).then(() => {
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))

