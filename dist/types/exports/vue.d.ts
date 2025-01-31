import type { Web3ModalOptions } from '../src/client.js';
import { Web3Modal } from '../src/client.js';
export type { Web3ModalOptions } from '../src/client.js';
export declare function createWeb3Modal(options: Web3ModalOptions): Web3Modal;
export declare function useWeb3ModalProvider(): {
    walletProvider: import("vue").Ref<{
        isMetaMask?: boolean | undefined;
        isStatus?: boolean | undefined;
        host?: string | undefined;
        path?: string | undefined;
        sendAsync?: ((request: {
            method: string;
            params?: any[] | undefined;
        }, callback: (error: any, response: any) => void) => void) | undefined;
        send?: ((request: {
            method: string;
            params?: any[] | undefined;
        }, callback: (error: any, response: any) => void) => void) | undefined;
        request?: ((request: {
            method: string;
            params?: any[] | undefined;
        }) => Promise<any>) | undefined;
    } | undefined>;
    walletProviderType: import("vue").Ref<"walletConnect" | "injected" | "coinbaseWallet" | "eip6963" | "w3mEmail" | undefined>;
};
export declare function useDisconnect(): {
    disconnect: () => Promise<void>;
};
export declare function useSwitchNetwork(): {
    switchNetwork: (chainId: number) => Promise<void>;
};
export declare function useWeb3ModalAccount(): {
    address: import("vue").Ref<string | undefined>;
    isConnected: import("vue").Ref<boolean>;
    chainId: import("vue").Ref<number | undefined>;
};
export declare function useWeb3ModalError(): {
    error: import("vue").Ref<unknown>;
};
export { useWeb3ModalTheme, useWeb3Modal, useWeb3ModalState, useWeb3ModalEvents, useWalletInfo } from '@web3modal/scaffold-vue';
export { defaultConfig } from '../src/utils/defaultConfig.js';
