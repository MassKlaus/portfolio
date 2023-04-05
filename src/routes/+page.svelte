<script lang="ts">
	import { onInterval } from '../utils/timer';

	const bannerTextOptions = ['Business', 'Reach', 'Network', 'Influence'];
	const printTextInterval = 100;
	const printCursorInterval = 250;
	const freezeDuration = 15;

	let bannerTextIndex = 0;
	let bannerTextToDisplay = bannerTextOptions[0];
	let bannerText = bannerTextToDisplay;
	let forwardPrint = true;
	let freezeFrameCount = 0;
	let showCursor = false;

	$: cursor = showCursor ? '|' : '';

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

	function blinkCursor() {
		showCursor = !showCursor;
	}
	onInterval(AnimateBannerText, printTextInterval);
	onInterval(blinkCursor, printCursorInterval);
</script>

<div class="banner">
	<div class="content">
		<div class="text-banner">
			<h3 class="title-text">
				Grow your <span class="catchWord">{bannerText}!</span>
			</h3>
			<h4 class="subtitle-text">A new audience a few clicks away</h4>
		</div>
		<div class="banner-scroll-indicator">
			<span />
			<span />
			<span />
		</div>
	</div>
</div>

<style lang="scss" scoped>
	.banner {
		position: relative;
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

			.text-banner {
				.title-text {
					font-size: rem(56);
					margin-bottom: 0;
					.catchWord {
						display: inline-block;
						min-width: 5ch;
						text-align: left;
						color: $accent-color;
						text-shadow: rem(2) rem(2) rem(1) $highlight-color;
					}
				}

				.subtitle-text {
					font-size: rem(28);
				}
			}

			.banner-scroll-indicator {
				position: absolute;
				display: flex;
				flex-direction: column;
				align-items: center;

				gap: rem(15);

				bottom: 0;
				right: 50%;
				transform: translateY(-50%) translateX(50%);

				span {
					$animation-execution-time: 2s;

					position: relative;
					width: var(--arrow-arm-length);
					height: rem(4);

					animation: bounce $animation-execution-time linear infinite;
					animation-delay: var(--move-delay);

					--arrow-arm-length: #{rem(15)};
					--arm-color: #{$accent-color};
					--move-delay: #{$animation-execution-time/4};

					&:first-of-type {
						--arrow-arm-length: #{rem(14)};
						--move-delay: 0ms;
					}

					&:last-of-type {
						--arrow-arm-length: #{rem(16)};
						--move-delay: #{$animation-execution-time/2};
					}

					@keyframes bounce {
						25% {
							transform: scale(1);
							opacity: 1;
						}
						50% {
							transform: scale(1.2);
							--arm-color: $highlight-color;
							transform: scale(1.2) translateY(rem(2));
						}
						75% {
							opacity: 1;
						}
					}
					@keyframes color-shift {
						15% {
							background-color: mix($highlight-color, $accent-color, 50%);
						}
						50% {
							background-color: $highlight-color;
						}
						85% {
							background-color: mix($highlight-color, $accent-color, 50%);
						}
					}

					&::after,
					&::before {
						content: '';
						display: block;
						width: var(--arrow-arm-length);
						height: rem(2);
						background-color: var(--arm-color);
						border-radius: rem(10);
						animation: color-shift $animation-execution-time linear infinite;
						animation-delay: var(--move-delay);
					}

					&::after {
						transform: translateY(-50%) translateX(-33%) rotateZ(45deg);
					}

					&::before {
						transform: translateY(50%) translateX(33%) rotateZ(-45deg);
					}
				}
			}
		}
	}
</style>
