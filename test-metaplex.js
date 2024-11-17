const { Metaplex } = require('@metaplex-foundation/js');
const { Connection, clusterApiUrl } = require('@solana/web3.js');

const connection = new Connection(clusterApiUrl('devnet'));
const metaplex = new Metaplex(connection);

console.log('Metaplex Core is working!');


