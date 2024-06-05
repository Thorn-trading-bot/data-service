import { ethers } from "ethers";

export const illuminexDex = {
    FACTORY_ADDRESS: "0x045551B6A4066db850A1160B8bB7bD9Ce3A2B5A5",
    ROUTER_ADDRESS: "0x5b82acbDe21bda0E9E277BF29A0F84f8deB5F1A7",
    PRIVATE_WRAPPER_FACTORY_ADDRESS: "0xb539f1D01A437C7f30cAfC994e918F952dDc0bA2",
};

export const tokenAddress = {
    USDT: "0xeC240a739D04188D83E9125CECC2ea88fABd9B08",
    BNB: "0x4CCc8Da0AFbD7195287bc7c553f299c5aB74a013",
    ROSE: "0x8Bc2B030b299964eEfb5e1e0b36991352E56D2D3",
    ETH: "0x865483BAFEd87b23cBF0fE721d4533B4Cda927B6",
};

export const provider = new ethers.providers.JsonRpcProvider("https://sapphire.oasis.io");
