import {WisCore} from 'wis-core';
import {join} from 'path';
import {TestProvider} from "./TestProvider";

const core = new WisCore({
	server: {
		host: '0.0.0.0',
		port: 3000,
		sessionSecret: 'super-secret'
	},
	frontend: {
		dist: join(__dirname, 'client-dist'),
		plugins: join(__dirname, '../src/frontend/src/plugins')
	},
	providers: [
		TestProvider
	]
});


(async () => {
	await core.start();
})();