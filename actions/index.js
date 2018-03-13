import * as types from '../constants/actionTypes';
import web3 from '../ethereum/web3';

function web3Initialized(results) {
    return {
        type: types.WEB3_INITIALIZED,
        payload: results
    }
}

export function getWeb3() {
    return async function (dispatch) {
        let web3, results;
        // check if runnig code in the server or the browser
        if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
            // We are in the browser and metamask is running.
            web3 = new Web3(window.web3.currentProvider);

            results = {
                web3Instance: web3
            }

            console.log('Injected web3 detected.');
            
            dispatch(web3Initialized(results))
        } else {
            // We are on the server *OR* the user is not running metamask.
            // const provider = new Web3.providers.HttpProvider(
            //     'https://rinkeby.infura.io/2KgE38uh5rYNDiH8nwzY'
            // )
            const provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545')

            web3 = new Web3(provider);

            results = {
                web3Instance: web3
            }

            console.log('No web3 instance injected, using Local web3.');
            debugger
            dispatch(web3Initialized(results))
        }
    }
}
