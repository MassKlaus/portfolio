<script lang="ts">
	import { onInterval } from '../../utils/timer';

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

<section class="banner" id="home">
	<div class="content">
		<div class="text-banner">
			<h3 class="title-text">
				Grow your <span class=" mixed-phase-text">{bannerText}!</span>
			</h3>
			<h4 class="subtitle-text">A new audience a few clicks away</h4>
			<a class="call-to-action" href="#contact">Get in Touch</a>
		</div>
		<div class="banner-scroll-indicator">
			<span />
			<span />
			<span />
		</div>
	</div>
</section>

<style lang="scss" scoped>
	@use 'sass:math';

	.banner {
		position: relative;
		background-image: url(/images/banner-glitch.jpg);
		background-size: cover;
		background-position: center;
		height: 100svh; /* Set the height of the banner */
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;

		box-shadow: rem(0) rem(1) rem(5) $accent-color, rem(0) rem(2) rem(10) $highlight-color;

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
				display: flex;
				flex-direction: column;

				align-items: center;
				.title-text {
					font-size: rem(56);
					margin-bottom: 0;
					.catchWord {
						display: inline-block;
						min-width: 5ch;
						text-align: left;
						color: $secondary-color;
						text-shadow: rem(2) rem(2) rem(1) $highlight-color;
					}
				}

				.subtitle-text {
					font-size: rem(24);
				}

				.call-to-action {
					display: inline-block;
					font-size: rem(30);
					padding: rem(5) rem(30);

					margin-top: 30px;

					border-radius: rem(1);

					box-shadow: rem(5) rem(5) 0 $accent-color, rem(-5) rem(-5) 0 $highlight-color;
					text-shadow: rem(2) rem(2) $highlight-color;
					backdrop-filter: blur(rem(2));

					color: $accent-color;
					font-family: $heading-font;
					font-weight: bold;

					&:hover {
						box-shadow: rem(5) rem(5) 0 $accent-color-hover,
							rem(-5) rem(-5) 0 $highlight-color-hover;
						text-shadow: rem(2) rem(2) $highlight-color-hover;
						color: $accent-color-hover;
					}
				}
			}

			.banner-scroll-indicator {
				position: absolute;
				display: flex;
				flex-direction: column;
				align-items: center;

				gap: rem(18);

				bottom: 0;
				right: 50%;
				transform: translateY(-50%) translateX(50%);

				span {
					$animation-execution-time: 1.5s;

					position: relative;
					width: var(--arrow-arm-length);

					animation: bounce $animation-execution-time linear infinite;
					animation-delay: var(--move-delay);

					$arrow-arm-length: rem(20);
					--arrow-arm-length: #{$arrow-arm-length};
					--arm-color: #{$accent-color};
					--move-delay: #{math.div($animation-execution-time, 4)};

					&:first-of-type {
						--arrow-arm-length: calc(#{$arrow-arm-length} * 0.85);
						--move-delay: 0ms;
					}

					&:last-of-type {
						--arrow-arm-length: calc(#{$arrow-arm-length} * 1.15);
						--move-delay: #{math.div($animation-execution-time, 2)};
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
