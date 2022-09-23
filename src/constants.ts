import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare enum ChainId {
    MAINNET = 1,
    MATIC = 137,
    MATIC_TESTNET = 80001,
    BSC = 56,
    BSC_TESTNET = 97,
    FLARE = 14,
    COSTON = 16,
    SONGBIRD = 19
}
export declare enum SmartRouter {
    APE = "APE",
    PANCAKE = "PANCAKE",
    BISWAP = "BISWAP",
    QUICKSWAP = "QUICKSWAP",
    UNISWAP = "UNISWAP",
    SUSHISWAP = "SUSHISWAP",
    FLARE = "FLARE",
    COSTON = "COSTON",
    SONGBIRD = "SONGBIRD"
}
export declare const SMART_INIT_CODE_HASH: Record<ChainId, Record<SmartRouter, string>>;
export declare const SMART_FACTORY_ADDRESS: Record<ChainId, Record<SmartRouter, string>>;
export declare const SMART_ROUTER_ADDRESS: Record<ChainId, Record<SmartRouter, string>>;
export declare const BONUS_ROUTER_ADDRESS: Record<ChainId, string>;
export declare const INIT_CODE_HASH: {
    [chainId in ChainId]: string;
};
export declare const FACTORY_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ROUTER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const SUSHI_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MASTERCHEF_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BAR_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MAKER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const TIMELOCK_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _998: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
