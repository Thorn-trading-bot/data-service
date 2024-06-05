import { formatUnits, parseUnits } from "ethers/src.ts/utils";
import { tokenAddress } from "../../constants";
import { factory, router } from "../../contracts";
import { getAllTokens } from "../token-config";
import { updatePrice } from "../token-market-info";

export async function runTasks() {
    const tokens = await getAllTokens();

    tokens.forEach(async (token) => {
        const privateUSDT = "0x9Ca066f00e55b90623eFe323feB2A649686538b6";

        const privateERC = token.privateAddress!;

        const price = await router.getAmountsOut(parseUnits("1", token.decimals), [privateERC, privateUSDT]);

        console.log(`price ${token.symbol} = ${formatUnits(price[1], 6)} USDT`);

        await updatePrice(token.address, parseFloat(formatUnits(price[1], 6)));
    });
}
