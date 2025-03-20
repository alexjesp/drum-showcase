<script>
	import SpotifyIcon from '../icons/SpotifyIcon.svelte';
	import InstagramIcon from '../icons/InstagramIcon.svelte';
	import GitHubIcon from '../icons/GitHubIcon.svelte';
	import YouTubeIcon from '../icons/YouTubeIcon.svelte';
</script>

<style>
	ul {
		display: flex;
		align-items: center;
		list-style: none;
		position: fixed;
		top: 50px;
	}

	li {
		margin-right: 10px;
		flex: none;
	}

	a {
		display: inline-block;
		fill: #000;
		width: 24px;
	}

	.wider {
		width: 57px;
	}

	@media screen and (min-width: 740px) and (max-width: 1100px) {
		ul {
			position: static;
		}
	}

	@media screen and (max-width: 740px) {
		ul {
			position: static;
		}
	}
</style>
