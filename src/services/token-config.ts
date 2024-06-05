import { IERC20__factory } from "../../typechain-types";
import { provider, tokenAddress } from "../constants";
import { wrapperFactory } from "../contracts";
import TokenConfigModel from "../models/token-config";
export async function getAllTokens() {
    const tokens = await TokenConfigModel.find();
    return tokens;
}

export async function getTokenConfig(address: string) {
    const token = await TokenConfigModel.findOne({ address });
    if (!token) {
        throw new Error("Token not found");
    }
    return token;
}

export async function setupDefaultTokenConfig() {
    await Promise.all([addConfiguredToken(tokenAddress.ETH), addConfiguredToken(tokenAddress.BNB), addConfiguredToken(tokenAddress.ROSE)]);
}
export async function addConfiguredToken(tokenAddress: string) {
    const existingToken = await TokenConfigModel.findOne({ address: tokenAddress });
    if (existingToken) {
        return;
    }
    const address = tokenAddress;
    const erc20 = IERC20__factory.connect(address, provider);
    const [name, symbol, decimals, privateAddress] = await Promise.all([erc20.name(), erc20.symbol(), erc20.decimals(), wrapperFactory.wrappers(address)]);
    const newToken = new TokenConfigModel({
        address,
        name,
        symbol,
        decimals,
        privateAddress,
    });
    newToken.save();
}
