<script>
	import { releases } from '../data/releaseItems';
</script>

<ul>
	{#each releases as data}
		<li>
			<a href={data.href} target="_blank" rel="noopener noreferrer">
				<img src={data.imgSrc} alt={`${data.title} - ${data.artist} - ${data.description}`} />
			</a>
			<div class="info">
				<h2 class="title">{data.title}</h2>
				<h3 class="artist">
					{data.artist} <span class="release-type">({data.type})</span>
				</h3>
				<p class="description">{data.description}</p>
			</div>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		list-style: none;
		margin: 0;
	}

	@media screen and (max-width: 740px) {
		ul {
			font-size: 13px;
			line-height: 1.3;
		}

		.title {
			line-height: 1.2;
			font-size: 18px;
			margin-bottom: 0.4em;
		}

		a {
			min-width: 75px;
		}

		.description {
			font-size: 12px;
			line-height: 1.2;
		}
	}

	li {
		display: flex;
		margin-bottom: 3em;
		width: 100%;
	}

	.title {
		font-size: 1.2em;
		line-height: 1.3;
		margin-bottom: 0.2em;
	}

	.artist {
		font-size: 0.9em;
		line-height: 1.5;
		font-weight: 400;
		margin-bottom: 1em;
	}

	.release-type {
		font-size: 1em;
		color: rgba(0, 0, 0, 0.7);
	}

	a {
		margin-right: 2em;
		transition: 0.2s opacity linear;
		width: 35%;
		flex: none;
		max-width: 200px;
		min-width: 100px;
	}

	a:hover {
		opacity: 0.8;
	}

	.info {
		flex: 1;
	}

	img {
		width: 100%;
		height: auto;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(0, 0, 0, 0.1);
	}

	.description {
		color: rgba(0, 0, 0, 0.7);
		font-size: 1em;
		white-space: pre-wrap;
	}
</style>
