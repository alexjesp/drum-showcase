<script>
	import { resolve } from '$app/paths';
</script>

<h1>
	<a href={resolve('/')}>
		<span class="big">Alex</span>
		<span class="small-wrapper">
			<span class="small">Esp</span>
		</span>
	</a>
</h1>

<style>
	h1 {
		align-items: center;
		display: flex;
		text-transform: uppercase;
		font-family: BebasNeueRegular;
		font-size: 110px;
		height: 0.75em;
		width: 2.32em;
		overflow: hidden;
		justify-content: center;
		-webkit-user-select: none;
		user-select: none;
		margin: 0;
		font-weight: normal;
	}

	@media screen and (min-width: 740px) and (max-width: 1100px) {
		h1 {
			font-size: 80px;
		}
	}

	@media screen and (max-width: 740px) {
		h1 {
			justify-content: center;
			margin-top: 0.5em;
		}
	}

	a {
		display: flex;
		margin-top: 0.1em;
	}

	.big {
		font-size: 1em;
	}

	.small-wrapper {
		display: inline-block;
		margin-top: 0.19em;
		margin-left: 0.05em;
		border-top: 0.17em solid black;
	}

	.small {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.65em;
		line-height: 1.12;
		margin: -0.02em;
	}
</style>
