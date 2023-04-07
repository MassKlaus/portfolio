<script lang="ts">
	import type { SkillCardInfo } from '$types/SkillCardInfo';

	export let info: SkillCardInfo;
</script>

<div class="lang-card">
	<img src={info.image} alt="{info.title} logo" />
	<div class="card-text">
		<h4 class="title mixed-phase-text">{info.title}</h4>
		<p class="level"><span class="accent-phase-text">Level:</span> {info.level}</p>
		<p class="experience"><span class="highlight-phase-text">Experience:</span> {info.experienceInYears} Years</p>
	</div>
</div>

<style lang="scss" scoped>
	.lang-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: rem(250);

		border: $accent-color rem(2) solid;
		box-shadow: 0 0 rem(1) rem(2) $highlight-color;
		background: transparent;

		background-color: $primary-color-hover;

		border-radius: rem(10);

		img {
			padding: rem(25);
			width: 75%;
		}

		.card-text {
			display: grid;
			width: 100%;

			align-content: center;

			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, auto);

			grid-gap: rem(0);

			* {
				width: 100%;
				height: 100%;
			}

			.title {
				grid-column: 1 / 3;
				grid-row: 1 / 2;
				text-align: center;
			}

			.experience {
				padding: rem(0) rem(15);
				padding-top: rem(5);
				grid-column: 2;
				border-left: $accent-color rem(1) solid;
			}

			.level {
				padding: rem(0) rem(10);
				padding-top: rem(5);
				grid-column:  1;
				border-right: $highlight-color rem(1) solid;
			}
		}
	}
</style>
