import io from 'socket.io-client';
import {SvSocket} from './sv-node-connection';
import './api.doc';
import scheme from './scheme';

const socket = io();
const svSocket = new SvSocket(socket);
console.log(svSocket);

/**
 *
 * @type {SvjsAPI}
 */
const api = {};

Object.keys(scheme).forEach(namespace => {
	scheme[namespace].forEach(method => {
		let target = api;
		if (namespace !== 'default') {
			api[namespace] = {};
			target = api[namespace];
		}

		target[method] = async function (...args) {
			return svSocket.emit(`${namespace === 'default' ? '' : `${namespace} `}${method}`, ...args);
		};

	});
});


export default function SvjsApi(Vue, settings) {
	Vue.prototype.api = api;
	if (settings.development) {
		window.api = api;
	}
}

export {
	api
};