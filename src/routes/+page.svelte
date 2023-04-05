<script lang="ts">
	import { onInterval } from '../utils/timer';

	const bannerTextOptions = ['Business', 'Reach', 'Network'];
	const printTextInterval = 100;
	const freezeDuration = 10;

	let bannerTextIndex = 0;
	let bannerTextToDisplay = bannerTextOptions[0];
	let bannerText = '';
	let forwardPrint = true;
	let freezeFrameCount = 0;
	let blinkCursor = true;

	function AnimateBannerText() {
		if (bannerText.length === 0 && !forwardPrint) {
			forwardPrint = true;
			bannerTextIndex = ++bannerTextIndex % bannerTextOptions.length;
			bannerTextToDisplay = bannerTextOptions[bannerTextIndex];
			freezeFrameCount = 0;
		}

		if (bannerTextToDisplay.length === bannerText.length) {
			if (freezeDuration >= freezeFrameCount) {
				freezeFrameCount++;
				return;
			}

			forwardPrint = false;
		}

		if (forwardPrint) {
			bannerText = bannerTextToDisplay.substring(0, bannerText.length + 1);
		} else {
			bannerText = bannerText.substring(0, bannerText.length - 1);
		}
	}
	onInterval(AnimateBannerText, printTextInterval);
</script>

<div class="banner">
	<div class="content">
		<div class="text-banner">
			<h3 class="title">
				Grow your
				<span class="catchWord">{bannerText}</span>
			</h3>
		</div>
		<h4>A new audience a few clicks away</h4>
	</div>
</div>

<style lang="scss" scoped>
	.banner {
		background-image: url(/images/hero_banner.jpg);
		background-size: cover;
		background-position: center;
		height: 100svh; /* Set the height of the banner */
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;

		z-index: 0;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
		}

		.content {
			z-index: 1;

			padding: 0 rem(10);

			.title {
				display: flex;
				justify-content: center;
				.catchWord {
					text-align: left;
					margin-left: rem(8);
					display: block;
					color: $accent-color;
					min-width: 7ch;
					text-shadow: rem(2) rem(2) rem(1) $highlight-color;
				}
			}

			.scroll-indicator {
			}
		}
	}
</style>
