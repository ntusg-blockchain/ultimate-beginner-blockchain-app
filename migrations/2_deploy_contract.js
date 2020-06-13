var Greeter = artifacts.require('Greeter')

module.exports = function(deployer, network, accounts) {
  // deployment steps
  deployer.deploy(Greeter);
};
