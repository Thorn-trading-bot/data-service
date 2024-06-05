import { ILuminexRouterV1__factory, ILuminexV1Factory__factory, PrivateWrapperFactory__factory } from "../../typechain-types";
import { illuminexDex, provider } from "../constants";

export const factory = ILuminexV1Factory__factory.connect(illuminexDex.FACTORY_ADDRESS, provider);

export const router = ILuminexRouterV1__factory.connect(illuminexDex.ROUTER_ADDRESS, provider);

export const wrapperFactory = PrivateWrapperFactory__factory.connect(illuminexDex.PRIVATE_WRAPPER_FACTORY_ADDRESS, provider);
