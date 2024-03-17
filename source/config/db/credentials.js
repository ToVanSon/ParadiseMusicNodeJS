const mongoose = require('mongoose');
const start = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://toson1371:jaaBK0B8LGimYV3K@cluster0.o8ybjfz.mongodb.net/ParadiseMusic?retryWrites=true&w=majority",{
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log("Connected...");
    } catch (error) {
      console.log(error);
      console.log("Connection failed");
    }
};
mongoose.set('strictQuery', true);

module.exports = { start };



