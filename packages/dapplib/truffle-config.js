require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember pudding hidden private surge sock'; 
let testAccounts = [
"0xe8e2499fcbf915f90ac77ebac877e6cbed79cb775c056637e9adc3b8788e0ec9",
"0xd40f13624f44687158b5584dfcbcd173ce5123eab054a812255b9321a954ad93",
"0x6933a8acfe5ea7e5fc2cae615a3ec06415cd381f5ac417f9e62100a58e5a70bb",
"0x19d88e1d9b0366c515f8846d8b964366d432598de586e559f7d7882036ff9382",
"0x1f7e8b248ed4aba6377be3c1e5fe6595ddd00d95502b70a335adb6c31f5f3992",
"0x1485b2c0d0afb8e272597dd065cec131ed28642d17086e6096960c45b1d357b4",
"0xfee9fa793c6e7bfc16e2f142f34b1ea1bc3b9a88a398d7cb9b222e1192360c53",
"0x7ab825ae7f8b9c8863064fd417d20891be77249e4ef947e26ce6d5c521a45b84",
"0x08a778a20962be2df809c7d0aad45d94e5c1d6c84067918c397b37772526e4a9",
"0x3de550ac5416ed66e0fbd41b30f1e4f02a2ffe8dfeb4b95926d03acec1f99564"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

