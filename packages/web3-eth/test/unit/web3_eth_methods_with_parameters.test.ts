/* eslint-disable import/namespace */
import Web3Eth from '../../src/index';
import * as rpcMethods from '../../src/rpc_methods';
import * as rpcMethodWrappers from '../../src/rpc_method_wrappers';
import {
	getBlockNumberValidData,
	getChainIdValidData,
	getGasPriceValidData,
	getHashRateValidData,
} from '../fixtures/rpc_methods_wrappers';
import {
	estimateGasValidData,
	// estimateGasValidData,
	getBalanceValidData,
	getBlockTransactionCountValidData,
	getBlockUncleCountValidData,
	getBlockValidData,
	getCodeValidData,
	getFeeHistoryValidData,
	// getCodeValidData,
	// getFeeHistoryValidData,
	getPastLogsValidData,
	getProofValidData,
	getStorageAtValidData,
	getTransactionCountValidData,
	getTransactionFromBlockValidData,
	getTransactionReceiptValidData,
	getTransactionValidData,
	getUncleValidData,
	sendSignedTransactionValidData,
	signValidData,
	submitWorkValidData,
} from '../fixtures/web3_eth_methods_with_parameters';

jest.mock('../../src/rpc_methods');
jest.mock('../../src/rpc_method_wrappers', () => ({
	...jest.requireActual('../../src/rpc_method_wrappers'),
	getHashRate: jest.fn(),
	getGasPrice: jest.fn(),
	getBlockNumber: jest.fn(),
	getChainId: jest.fn(),
	getBalance: jest.fn(),
	getBlock: jest.fn(),
	getTransactionCount: jest.fn(),
	getBlockUncleCount: jest.fn(),
	getUncle: jest.fn(),
	getTransaction: jest.fn(),
	getTransactionFromBlock: jest.fn(),
	getTransactionReceipt: jest.fn(),
	GetTransactioCount: jest.fn(),
	estimateGas: jest.fn(),
	getFeeHistory: jest.fn(),
	getProof: jest.fn(),
	getBlockTransactionCount: jest.fn(),
	// getLogs: jest.fn()
}));
jest.spyOn(rpcMethods, 'getLogs').mockResolvedValue([
	'0x1234567890123456789012345678901234567890',
	'0x295a70b2de5e3953354a6a8344e616ed314d7251',
]);
describe('web3_eth_methods_with_parameters', () => {
	let web3Eth: Web3Eth;

	beforeAll(() => {
		web3Eth = new Web3Eth('http://127.0.0.1:8545');
	});

	describe('should call RPC method with expected parameters', () => {
		describe('only has returnFormat parameter', () => {
			describe('getHashRate', () => {
				it.each(getHashRateValidData)('returnFormat: %s', async returnFormat => {
					await web3Eth.getHashRate(returnFormat);
					expect(rpcMethodWrappers.getHashRate).toHaveBeenCalledWith(
						web3Eth,
						returnFormat,
					);
				});
			});

			describe('getGasPrice', () => {
				it.each(getGasPriceValidData)('returnFormat: %s', async returnFormat => {
					await web3Eth.getGasPrice(returnFormat);
					expect(rpcMethodWrappers.getGasPrice).toHaveBeenCalledWith(
						web3Eth,
						returnFormat,
					);
				});
			});

			describe('getBlockNumber', () => {
				it.each(getBlockNumberValidData)('returnFormat: %s', async returnFormat => {
					await web3Eth.getBlockNumber(returnFormat);
					expect(rpcMethodWrappers.getBlockNumber).toHaveBeenCalledWith(
						web3Eth,
						returnFormat,
					);
				});
			});

			describe('getChainId', () => {
				it.each(getChainIdValidData)('returnFormat: %s', async returnFormat => {
					await web3Eth.getChainId(returnFormat);
					expect(rpcMethodWrappers.getChainId).toHaveBeenCalledWith(
						web3Eth,
						returnFormat,
					);
				});
			});
		});

		describe('has multiple parameters', () => {
			describe('has returnFormat parameter', () => {
				describe('getBalance', () => {
					it.each(getBalanceValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getBalance(...input);
							expect(rpcMethodWrappers.getBalance).toHaveBeenCalledWith(
								web3Eth,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getBlock', () => {
					it.each(getBlockValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getBlock(...input);
							expect(rpcMethodWrappers.getBlock).toHaveBeenCalledWith(
								web3Eth,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getBlockTransactionCount', () => {
					it.each(getBlockTransactionCountValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getBlockTransactionCount(...input);
							expect(rpcMethodWrappers.getBlockTransactionCount).toHaveBeenCalledWith(
								web3Eth,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getBlockUncleCount', () => {
					it.each(getBlockUncleCountValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getBlockUncleCount(...input);
							expect(rpcMethodWrappers.getBlockUncleCount).toHaveBeenCalledWith(
								web3Eth,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getUncle', () => {
					it.each(getUncleValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getUncle(...input);
							expect(rpcMethodWrappers.getUncle).toHaveBeenCalledWith(
								web3Eth,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getTransaction', () => {
					it.each(getTransactionValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getTransaction(...input);
							expect(rpcMethodWrappers.getTransaction).toHaveBeenCalledWith(
								web3Eth,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getTransactionFromBlock', () => {
					it.each(getTransactionFromBlockValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getTransactionFromBlock(...input);
							expect(rpcMethodWrappers.getTransactionFromBlock).toHaveBeenCalledWith(
								web3Eth,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getTransactionReceipt', () => {
					it.each(getTransactionReceiptValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getTransactionReceipt(...input);
							expect(rpcMethodWrappers.getTransactionReceipt).toHaveBeenCalledWith(
								web3Eth,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getTransactionCount', () => {
					it.each(getTransactionCountValidData)(
						'input: %s\rpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getTransactionCount(...input);
							expect(rpcMethodWrappers.getTransactionCount).toHaveBeenCalledWith(
								web3Eth,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('estimateGas', () => {
					it.each(estimateGasValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.estimateGas(...input);
							expect(rpcMethodWrappers.estimateGas).toHaveBeenCalledWith(
								web3Eth,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getFeeHistory', () => {
					it.each(getFeeHistoryValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getFeeHistory(...input);
							expect(rpcMethodWrappers.getFeeHistory).toHaveBeenCalledWith(
								web3Eth,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getProof', () => {
					it.each(getProofValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getProof(...input);
							expect(rpcMethodWrappers.getProof).toHaveBeenCalledWith(
								web3Eth,
								...rpcMethodParameters,
							);
						},
					);
				});
			});

			describe("doesn't have returnFormat parameter", () => {
				describe('getStorageAt', () => {
					it.each(getStorageAtValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getStorageAt(...input);
							expect(rpcMethods.getStorageAt).toHaveBeenCalledWith(
								web3Eth.requestManager,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('getCode', () => {
					it.each(getCodeValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (input, rpcMethodParameters) => {
							await web3Eth.getCode(...input);
							expect(rpcMethods.getCode).toHaveBeenCalledWith(
								web3Eth.requestManager,
								...rpcMethodParameters,
							);
						},
					);
				});

				describe('sendSignedTransaction', () => {
					it.each(sendSignedTransactionValidData)('input: %s', async input => {
						await web3Eth.sendSignedTransaction(input);
						expect(rpcMethods.sendRawTransaction).toHaveBeenCalledWith(
							web3Eth.requestManager,
							input,
						);
					});
				});

				describe('sign', () => {
					it.each(signValidData)('input: %s', async input => {
						await web3Eth.sign(...input);
						expect(rpcMethods.sign).toHaveBeenCalledWith(
							web3Eth.requestManager,
							input[1], // Address
							input[0], // Bytes
						);
					});
				});

				describe('getPastLogs', () => {
					it.each(getPastLogsValidData)(
						'input: %s\nrpcMethodParameters: %s',
						async (_input, rpcMethodParameters) => {
							await web3Eth.getPastLogs(rpcMethodParameters);
							expect(rpcMethods.getLogs).toHaveBeenCalledWith(
								web3Eth.requestManager,
								rpcMethodParameters,
							);
						},
					);
				});

				describe('submitWork', () => {
					it.each(submitWorkValidData)('input: %s', async input => {
						await web3Eth.submitWork(...input);
						expect(rpcMethods.submitWork).toHaveBeenCalledWith(
							web3Eth.requestManager,
							...input,
						);
					});
				});
			});
		});
	});
});
