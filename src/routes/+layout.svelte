<script>
	import '$/app.scss';
	import HeaderBar from '$components/layout/headerBar.svelte';
</script>

<HeaderBar />

<main>
	<slot />
</main>

<section class="footer">
	<h3>
		Developed by <span class="mixed-phase-text">Massine Mouha</span> with
		<span class="mixed-phase-text">Svelte Kit</span>
	</h3>
	<h5>Logos Acquired from <a class="highlight-phase-text" href="https://www.svgrepo.com/">Svg Repo</a> and <a class="highlight-phase-text" href="https://www.vectorlogo.zone">Vector Logo</a></h5>
	<h5 class="mixed-phase-text">Copyright © {new Date().getFullYear()}</h5>
</section>

<style lang="scss" scoped>
	.footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: $primary-color-clicked;
		color: $text-color;
		margin-top: rem(100);
		font-size: rem(16);

		border-top: rem(2) solid $highlight-color;

		padding: rem(30);
		padding-bottom: rem(10);
	}
</style>
