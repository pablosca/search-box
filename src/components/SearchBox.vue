<template>
	<div class="search-box">
		<div class="field">
			<label>
				<icon icon="search" />
				<input
					type="text"
					class="query-field"
					placeholder="Filter Data Sources..."
					v-model="query"
				/>
				<span class="loading-icon">
					<icon
						class="fa-spin"
						icon="spinner"
						size="lg"
						v-show="loading"
					/>
				</span>
			</label>			
		</div>

		<div class="dropdown">
			<label>
				Legal Entity: <strong>Show all</strong>
			</label>
		</div>

		<div class="dropdown">
			<label>
				Sort by: <strong>Most recent</strong>
			</label>
		</div>

		<div class="radio">
			<icon
				class="icon"
				icon="check-circle"
			/>
			<strong>Show archived</strong>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'SearchBox',

	data () {
		return {
			query: '',
			loading: false
		};
	},

	watch: {
		query (val) {
			// perform search only when user typed 3 or more characters
			if (val.length > 2) {
				this.search();
			} else {
				this.$emit('search', []);
			}
		}
	},

	methods: {
		search () {
			const params = {
				query: this.query,
				legal_entity: 1,
				sort: 'asc',
				show_archived: true
			};

			this.loading = true;

			axios.get('http://5b84592bdb24a100142dcdf9.mockapi.io/search', { params })
				.then((response) => {
					this.$emit('search', response.data.results);
				})
				.catch((error) => {
					console.log(error);
				})
				.then(() => {
					this.loading = false;
				});
		}
	}
}
</script>

<style lang="scss">
	.search-box {
		align-items: center;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		padding-bottom: 1.5rem;
	}

	.query-field {
		border: none;
		font-size: 1rem;
		margin-left: .5rem;
	}

	.loading-icon {
		display: inline-block;
		width: 3rem;
	}

	.radio {
		.icon {
			color: #47d1de;
			height: 1rem;
			width: 1rem;
		}

		strong {
			display: inline-block;
			margin-left: .5rem;
		}
	}
</style>
