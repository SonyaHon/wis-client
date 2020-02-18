import {Provider, Remote} from 'wis-core'

@Provider('user')
export class TestProvider {
	@Remote()
	async getUserInfo() {
		return {
			loggedIn: false
		}
	}
}