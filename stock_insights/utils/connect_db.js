import mongoose from "mongoose";

export const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    try {
        await mongoose.connect("mongodb+srv://test_user_si:fJIpx0aWU3jmxoX0@cluster0.e3hnp7s.mongodb.net/?retryWrites=true&w=majority", {
            dbName: "Test",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to db")
    } catch (error) {
        console.log(error);
    }
};
