import web3 from './web3';
import ProjectFactory from './build/contracts/ProjectFactory.json';

const instance = new web3.eth.Contract(
    ProjectFactory.abi, // Contract interface
    '0xf204a4ef082f5c04bb89f7d5e6568b796096735a' // Contract address on network
);

export default instance;