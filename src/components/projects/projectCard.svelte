<script lang="ts">
	export let image: string;
	export let title: string;
	export let description: string;
	export let link: string;
</script>

<!--open in new tab-->
<a href="{link}" target="_blank" class="project-card">
	<div class="card-image" style="background-image: url({image})">
		<div class="gradient-overlay">
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	</div>
</a>

<style lang="scss">
	.project-card {
		position: relative;
		width: 100%;
		max-width: rem(350);
		overflow: hidden;
		border-radius: rem(5);

		$shadow-blur: rem(2);

		color: $text-color;
		box-shadow: 0 rem(0) $shadow-blur $highlight-color;

		transition: all 0.25s ease;

		cursor: pointer;

		&:hover {
			transform: translateY(rem(-5));
			box-shadow: rem(0) rem(5) calc(#{$shadow-blur} * 10) rem(2) $highlight-color;
		}

		background-color: $primary-color;

		.card-image {
			height: rem(200);
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;

			.gradient-overlay {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				background: linear-gradient(to top, rgba(26, 26, 62, 0.9), transparent);
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				padding: 1rem;
				// opacity: 0;
				transform: translateY(59%);
				transition: all 0.5s ease;

				//adding text-shadow to the h3 and p elements
				h3 {
					font-weight: bold;
					margin: 0 0 0.5rem;
					text-shadow: rem(2) rem(2) 0 $highlight-color, rem(-2) rem(-2) 0 $accent-color;
				}

				p {
					font-family: Poppins, Roboto, sans-serif;
					margin: 0;
					height: rem(80);
					text-shadow: rem(2) rem(2) 0 $highlight-color;
				}
			}

			&:hover {
				.gradient-overlay {
					transform: translateY(0%);
				}
			}
		}
	}
</style>
