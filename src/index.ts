import mongoose from "mongoose";
import dotenv from "dotenv";
import { setupDefaultTokenConfig } from "./services/token-config";
import { runTasks } from "./services/fetch-data-onchain/run-tasks";
dotenv.config();

async function connectMongo() {
    await mongoose.connect(process.env.MONGO_URL!, {
        dbName: process.env.MONGO_DB_DATASERVICE!,
        user: process.env.MONGO_USERNAME!,
        pass: process.env.MONGO_PASSWORD!,
        autoCreate: true,
        autoIndex: true,
    });
    console.log("MongoDB connected");
    await setupDefaultTokenConfig();
}

async function main() {
    await connectMongo();
    await runTasks();
}
main();
