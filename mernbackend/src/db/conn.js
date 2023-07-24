const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/registrationForm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Connection to MongoDB successful`);
}).catch((e) => {
    console.log(`Error connecting to MongoDB: ${e}`);
});