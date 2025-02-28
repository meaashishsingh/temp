const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri ="mongodb+srv://root:987654321@cluster0.rblpaxc.mongodb.net/?retryWrites=true&w=majority";

        // "mongodb+srv://anuj:Ya0fKBalld60gpfs@cluster0.rblpaxc.mongodb.net/?retryWrites=true&w=majority";

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
