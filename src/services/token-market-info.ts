import { tokenAddress } from "../constants";
import TokenConfigModel from "../models/token-config";
import TokenMarketModel from "../models/token-market-info";
import TokenMarketInfo from "../types/token-market-info";
import { getTokenConfig } from "./token-config";

export async function updatePrice(tokenAddress: string, price: number) {
    const existingToken = await TokenMarketModel.findOne({ address: tokenAddress });
    if (existingToken!) {
        existingToken.priceUSDT = price.toString();
        await existingToken.save();
    } else {
        const tokenConfig = await getTokenConfig(tokenAddress);
        const newToken = new TokenMarketModel({
            address: tokenConfig.address,
            name: tokenConfig.name,
            symbol: tokenConfig.symbol,
            priceUSDT: price.toString(),
        });
        await newToken.save();
    }
}
