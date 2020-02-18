class SvSocket {
	constructor(socket) {
		this.socket = socket;
	}

	async emit(eventName, ...args) {
		return new Promise(resolve => {
			this.socket.emit(eventName, args, (respond) => {
				resolve(respond);
			});
		});
	}

	on(eventName, handler) {
		this.socket.on(eventName, async (args, fn) => {
			const res = await handler(...args);
			fn(res);
		});
	}
}

export {SvSocket};

