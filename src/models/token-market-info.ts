import mongoose, { Schema } from "mongoose";
import TokenMarketInfo from "../types/token-market-info";

const TokenMarketInfo = new Schema<TokenMarketInfo>({
    address: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    symbol: {
        type: String,
        required: true,
    },
    priceUSDT: {
        type: String,
        required: true,
    },
});

const TokenMarketModel = mongoose.model<TokenMarketInfo>("TokenMarket", TokenMarketInfo);
export default TokenMarketModel;
