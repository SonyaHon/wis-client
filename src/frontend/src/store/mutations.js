import {MUTATIONS} from './consts';

export default {
	[MUTATIONS.INITIAL_STATE](state, payload) {
		state.user = payload;
	}
};