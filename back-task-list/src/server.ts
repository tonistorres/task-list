import App from './app';
// import MongoConnection from './models/mongo.connection';
// import connectMysql from './models/connections';

async function main() {
  try {
    const { PORT } = process.env;
    const app = new App();
    // await MongoConnection.connect(`mongodb://${DB_HOST}:/trybeflix`);
    app.start(PORT);
  } catch (error) {
    console.log(error);
    process.exit(1); 
  } 
}

main();