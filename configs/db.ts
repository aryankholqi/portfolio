const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(
        "mongodb://aryankholqi:65DVkOr1aNgyIW1h@ac-thwrj2x-shard-00-00.dk957xw.mongodb.net:27017,ac-thwrj2x-shard-00-01.dk957xw.mongodb.net:27017,ac-thwrj2x-shard-00-02.dk957xw.mongodb.net:27017/portfolio?replicaSet=atlas-kf76s5-shard-0&ssl=true&authSource=admin"
      );
      console.log("Connect To DB Successfully :))");
    }
  } catch (err) {
    console.log("DB Connection Has Error =>", err);
  }
};

export default connectToDB;
