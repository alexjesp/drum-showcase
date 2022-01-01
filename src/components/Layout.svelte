<script>
	import Logo from '../components/Logo.svelte';
	import Nav from '../components/Nav.svelte';
	import Social from '../components/Social.svelte';
</script>

<div class="container">
	<div class="top-bar" />
	<div class="content">
		<div class="header">
			<div class="header-fixed">
				<Logo />
				<Nav />
			</div>
		</div>
		<div class="body"><slot /></div>
		<div class="social-container">
			<Social />
		</div>
	</div>
	<div class="footer">&copy; Alexander Esp {new Date().getFullYear()}</div>
</div>

<style>
	.container {
		align-items: center;
		display: flex;
		height: 100%;
		flex-direction: column;
		position: relative;
	}

	.content {
		display: flex;
		width: 100%;
		justify-content: center;
	}

	.header {
		display: flex;
		flex-direction: column;
		flex: none;
		width: 255px;
		margin-right: 3em;
		margin-top: 50px;
	}

	.header-fixed {
		position: fixed;
		top: 50px;
	}

	.body {
		padding-bottom: 6em;
		margin-top: 50px;
		flex: none;
		width: 550px;
		margin-right: 3em;
	}

	.social-container {
		display: flex;
		height: 30px;
		flex: none;
		justify-content: center;
		width: 160px;
		margin-top: 50px;
	}

	.footer {
		margin-top: -2em;
		font-size: 13px;
		padding: 2em 0;
		text-align: center;
		width: 100%;
	}

	.top-bar {
		border-top: 10px solid black;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 5;
	}

	@media screen and (min-width: 740px) and (max-width: 1100px) {
		.header {
			width: 162px;
		}

		.body {
			width: 500px;
			margin-right: 0;
		}

		.content {
			flex-wrap: wrap;
		}

		.social-container {
			margin-bottom: 2em;
			width: 100%;
		}
	}

	@media screen and (max-width: 740px) {
		.header {
			margin: 0;
		}

		.header-fixed {
			position: static;
		}

		.body {
			padding: 0;
			margin: 0;
			margin-top: 4em;
			width: 100%;
		}

		.content {
			align-items: center;
			flex-direction: column;
			padding: 0 1.5em 2em;
		}

		.social-container {
			justify-content: center;
			margin: 3em 0 0;
		}
	}
</style>
