<script lang="ts">
	import type { Link } from '../../types/Link';

	let expandNav = false;

	let links: Link[] = [
		{ text: 'Home', href: '#home', active: false },
		{ text: 'Projects', href: '#projects', active: false },
		{ text: 'About', href: '#about', active: false },
		{ text: 'Contact', href: '#contact', active: false }
	];

	function activateLink(targetIndex: number) {
		for (let index = 0; index < links.length; index++) {
			const element = links[index];

			console.log(`ACTIVATE: ${index === targetIndex} ${index}`);

			element.active = index === targetIndex;
		}

		links = links;
	}
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
			{#each links as link, i (i)}
				<a href={link.href} class:active-link={link.active} on:click={() => activateLink(i)}>
					{link.text}</a
				>
			{/each}
		</nav>
	</div>
</header>

<style lang="scss" scoped>
	$logo-mobile-width: rem(41);
	$logo-tablet-width: rem(41);
	$logo-desktop-width: rem(41);

	.header-wrapper {
		position: fixed;
		width: 100%;
		height: $nav-header-height;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: rem(8) rem(15);

		border-bottom: $accent-color rem(2) solid;

		background-color: $primary-color;

		z-index: 200;
		.logo {
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				@include mobile {
					height: $logo-mobile-width;
				}

				@include tablet {
					height: $logo-tablet-width;
				}

				height: $logo-desktop-width;
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
					gap: rem(5);
					cursor: pointer;
					padding: rem(8) 0;
					span {
						display: block;
						background-color: $accent-color;
						box-shadow: rem(-5) rem(4) rem(0) $highlight-color;
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
					box-shadow: rem(0) rem(-5) rem(0) $highlight-color, rem(0) rem(5) rem(0) $highlight-color;

					&:first-of-type {
						transform: translateY(rem(8)) rotate(45deg);
					}

					&:nth-of-type(2) {
						transform: scaleX(0);
					}

					&:last-of-type {
						transform: translateY(rem(-8)) rotate(-45deg);
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
					align-items: flex-start;
					color: red;
					position: absolute;
					background-color: $primary-color;
					width: rem(200);
					top: $nav-header-height;
					height: calc(100svh - $nav-header-height);
					right: 0;
					transform: translateX(100%);
					border-left: $accent-color rem(2) solid;

					&.show {
						transform: translateX(0) !important;
					}
				}

				a {
					position: relative;

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
						text-shadow: rem(2) rem(2) rem(1) $highlight-color;

						@include mobile {
							box-shadow: none;
						}
					}

					&.active-link {
						text-shadow: rem(2) rem(2) rem(1) $highlight-color;
					}
				}
			}
		}
	}
</style>
