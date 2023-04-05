<script lang="ts">
	let expandNav = false;
</script>

<header class="header-wrapper">
	<div class="logo">
		<img src="images/Massine_Logo_Transparent_header.png" alt="Massine Mouha Logo" />
	</div>
	<div class="navigation">
		<button
			class="hamburger"
			class:hamburger--open={expandNav}
			on:click={() => (expandNav = !expandNav)}
		>
			<span />
			<span />
			<span />
		</button>

		<nav class:show={expandNav}>
			<a href="#About">About me</a>
			<a href="#Projects">Projects</a>
			<a href="#Skills">Skills</a>
			<a href="#Contact">Contact</a>
		</nav>
	</div>
</header>

<style lang="scss" scoped>
	$logo-mobile-width: rem(33);
	$logo-tablet-width: rem(43);
	$logo-desktop-width: rem(49);

	.header-wrapper {
		position: fixed;
		width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: rem(10) rem(15);
		border-bottom: $accent-color rem(2) solid;

		background-color: $primary-color;

		z-index: 200;
		.logo {
			background-color: $primary-color;
			img {
				@include mobile {
					height: $logo-mobile-width;
				}

				@include tablet {
					height: $logo-tablet-width;
				}

				@include desktop {
					height: $logo-desktop-width;
				}
			}
		}

		.navigation {
			.hamburger {
				display: none;
				background: none;
				border: none;

				@include mobile {
					display: flex;
					flex-direction: column;
					gap: rem(9);
					cursor: pointer;
					padding: rem(8);
					span {
						display: block;
						background-color: $text-color;
						border-radius: rem(10);
						width: rem(30);
						height: rem(2);

						transition: all 300ms;

						&:nth-of-type(2) {
							transition: all 100ms;
						}
					}
				}
			}

			.hamburger--open {
				span {
					&:first-of-type {
						transform: translateY(rem(11)) rotate(45deg);
					}

					&:nth-of-type(2) {
						transform: scaleX(0);
					}

					&:last-of-type {
						transform: translateY(rem(-11)) rotate(-45deg);
					}
				}
			}

			nav {
				display: flex;
				align-items: center;
				gap: rem(10);

				transition: all 250ms;

				@include mobile {
					display: flex;
					flex-direction: column;
					align-items: start;
					position: absolute;
					background-color: $primary-color;
					width: rem(200);
					top: rem(63);
					height: calc(100dvh - rem(62));
					right: 0;
					transform: translateX(100%);
					border-left: $accent-color rem(2) solid;

					&.show {
						transform: translateX(0) !important;
					}
				}

				a {
					@include mobile {
						width: 100%;
						border-radius: 0;
					}

					padding: rem(5) rem(15);
					border-radius: rem(5);
					font-weight: 600;

					transition: all 100ms;

					&:hover,
					&:focus {
						background-color: $primary-color-hover;
						box-shadow: inset rem(0) rem(0) rem(2) $highlight-color;

						@include mobile {
							box-shadow: none;
						}
					}
				}
			}
		}
	}
</style>
