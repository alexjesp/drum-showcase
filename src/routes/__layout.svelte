<script>
	import Layout from '../components/Layout.svelte';
</script>

<Layout><slot /></Layout>

<style global>
	* {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
	}

	body {
		background-color: #fff;
		background-image: url(/images/bg.png);
		color: #000;
		font-size: 16px;
		font-family: 'Cabin', sans-serif;
	}

	h1,
	h2,
	h3 {
		margin: 0;
	}

	a,
	a:hover,
	a:active,
	a:visited {
		text-decoration: none;
		color: black;
	}

	p {
		margin-bottom: 1em;
		line-height: 1.4;
	}

	@font-face {
		font-family: 'BebasNeueRegular';
		src: url('/fonts/BebasNeue/BebasNeue-webfont.eot');
		src: url('/fonts/BebasNeue/BebasNeue-webfont.eot?#iefix') format('embedded-opentype'),
			url('/fonts/BebasNeue/BebasNeue-webfont.woff') format('woff'),
			url('/fonts/BebasNeue/BebasNeue-webfont.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
</style>
