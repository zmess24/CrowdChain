var Project = artifacts.require("./Project.sol");
var ProjectFactory = artifacts.require("./ProjectFactory.sol");

module.exports = function (deployer) {
  // deployer.deploy(Project);
  deployer.deploy(ProjectFactory);
};
