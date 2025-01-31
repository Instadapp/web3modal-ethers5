'use client';
import { Web3Modal } from '../src/client.js';
import { ConstantsUtil } from '@web3modal/scaffold-utils';
import { EthersStoreUtil } from '@web3modal/scaffold-utils/ethers';
import { getWeb3Modal } from '@web3modal/scaffold-react';
import { useSnapshot } from 'valtio';
import { ethers } from 'ethers';
let modal = undefined;
export function createWeb3Modal(options) {
    if (!modal) {
        modal = new Web3Modal({
            ...options,
            _sdkVersion: `react-ethers5-${ConstantsUtil.VERSION}`
        });
    }
    getWeb3Modal(modal);
    return modal;
}
export function useWeb3ModalProvider() {
    const { provider, providerType } = useSnapshot(EthersStoreUtil.state);
    const walletProvider = provider;
    const walletProviderType = providerType;
    return {
        walletProvider,
        walletProviderType
    };
}
export function useDisconnect() {
    async function disconnect() {
        await modal?.disconnect();
    }
    return {
        disconnect
    };
}
export function useSwitchNetwork() {
    async function switchNetwork(chainId) {
        await modal?.switchNetwork(chainId);
    }
    return {
        switchNetwork
    };
}
export function useWeb3ModalAccount() {
    const { address, isConnected, chainId } = useSnapshot(EthersStoreUtil.state);
    return {
        address,
        isConnected,
        chainId
    };
}
export function useWeb3ModalError() {
    const { error } = useSnapshot(EthersStoreUtil.state);
    return {
        error
    };
}
export { useWeb3ModalTheme, useWeb3Modal, useWeb3ModalState, useWeb3ModalEvents, useWalletInfo } from '@web3modal/scaffold-react';
export { defaultConfig } from '../src/utils/defaultConfig.js';
//# sourceMappingURL=react.js.map