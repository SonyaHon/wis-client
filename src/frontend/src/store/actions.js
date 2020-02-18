import {ACTIONS} from './consts';
import {api} from '../plugins/svjs-api';

export default {
	async [ACTIONS.GET_INITIAL_STATE](commit) {
		const res = await api.user.getUserInfo();
		console.log('SAAD', res);
	}
};