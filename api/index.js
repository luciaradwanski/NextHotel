const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => { //CAMBIAR A {alter: true} CUANDO TERMINE DE CREAR TODO EL BACKEND
  server.listen(PORT, () => {
    console.log(`🚀 Server listening at ${PORT}`); // eslint-disable-line no-console
  });
}); 