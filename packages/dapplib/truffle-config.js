require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note museum company hunt hero foster gaze'; 
let testAccounts = [
"0x99e957cf8eb0e02f9920f3e465e19ddc328b5f694671e6b1e983f4edc8917159",
"0x23b4a8917ff8e26edfddc9d9610c42c3bf3669ac2ce2ff8f95daf58c2df8b776",
"0x3d66a5d2288356c4d483d6863a62bd514452bb7387e125913bb1367838641db9",
"0x793dc02bb7e4f0b6eeebabfc3a61816949cfa7cbcc6a4f7cf60ae1299cfb5034",
"0x2ae3a76042e7095c2a3e312abe7d0ce76c0dfd6d3aa1c74f6a13d1fc14acb7ee",
"0x741025bfbe44aff5366826c7d99da6c6a34717b337b6248047780d44bd0e6e79",
"0x5bcd3268c79ebb8c8c46544388f9c778bf4062ea7b2923ace7df6c55291f4a71",
"0x470de35e4ae2c4f78cb0c117fb8984eec0bdd9cb7ab0452f5cedc7d008916ec5",
"0xadc90168b604dfbf14b05af495f1acda7d082fb6cc5ce36d3073012ae0505de0",
"0x305b7b83f1a7d821386c08b71bf8bd0001ace1583afc4e7a3d0cf8fea0836cf7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


