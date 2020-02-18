<template lang="pug">
	v-app(dark)
		v-fade-transition
			template(v-if="!initiated")
				v-content(app): v-layout(fill-height fill-width justify-center align-center): v-progress-circular(indeterminate)
			template(v-else)
</template>

<script>
	import {ACTIONS} from './store/consts';

	export default {
		name: 'App',
		data() {
			return {
				initiated: false
			};
		},
		async created() {
			this.$vuetify.theme.dark = true;
			await this.$store.dispatch(ACTIONS.GET_INITIAL_STATE);
			this.initiated = true;
		}
	};
</script>

<style lang="scss">
	html {
		overflow-y : auto !important;
	}
</style>
