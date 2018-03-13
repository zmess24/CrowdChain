var HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        new HDWalletProvider('spot shop alcohol vintage print credit north frame tuition execute youth wasp', 'https://rinkeby.infura.io/2KgE38uh5rYNDiH8nwzY')
      }, 
      network_id: '4'
    }
  }
};
