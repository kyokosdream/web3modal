import { IAbstractConnectorOptions, getChainId } from "../../helpers";

import { IAbstractConnectorOptions } from "../../helpers";

interface IWalletConnectV2Options extends IAbstractConnectorOptions {
  projectId: string;
  infuraId: string;
}

const ConnectToWalletConnectV2 = async (
  WalletConnectV2Provider: any,
  opts: IWalletConnectV2Options
) => {
  const provider = new WalletConnectV2Provider(opts.apiKey);

  await provider.enable();

  return provider;
};

export default ConnectToWalletConnectV2;
