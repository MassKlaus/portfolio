<script lang="ts">
	import HeroBanner from '$components/home/heroBanner.svelte';
	import ProjectCard from '$components/projects/projectCard.svelte';
	import SkillCard from '$components/skills/skillCard.svelte';
	import type { Project } from '$types/Project';
	import type { SkillCardInfo } from '$types/SkillCardInfo';
	import { SkillLevel } from '$types/SkillLevel';
	import { getYearsSince } from '$utils/dater';

	let projects: Project[] = [
		{
			title: 'Yapped - Metty/Klaus',
			image: '/raw-images/metty-yapped.png',
			description:
				'A Paramater editor for Sekiro: Shadows Die Twice allowing to edit in game behaviors',
			link: 'https://github.com/MassKlaus/Yapped-Klaus'
		},
		{
			title: 'Text Parser',
			image: '/raw-images/textParser-transparent.png',
			description:
				'A text parser that takes a file input and converts tokens and keywords into specific symbols',
			link: 'https://github.com/MassKlaus/TextParser'
		},
		{
			title: 'Skin Furyu Manager',
			image: '/raw-images/SkinFuryu_Transparent_logo.png',
			description:
				'Soap recipe manager and ingredient classing tool with pdf export and costing calculation',
			link: 'https://github.com/MassKlaus/SkinFuryu_Cost_Manager'
		}
	];

	// round to two decimals
	let skills: SkillCardInfo[] = [
		{
			title: 'C#',
			image: '/images/logos/csharp.svg',
			experienceInYears: getYearsSince(2018),
			level: SkillLevel.advanced
		},
		{
			title: 'JavaScript',
			image: '/images/logos/javascript.svg',
			experienceInYears: getYearsSince(2019),
			level: SkillLevel.intermediate
		},
		{
			title: 'TypeScript',
			image: '/images/logos/typescript.svg',
			experienceInYears: getYearsSince(2020),
			level: SkillLevel.intermediate
		},
		{
			title: 'Python',
			image: '/images/logos/python.svg',
			experienceInYears: 1,
			level: SkillLevel.beginner
		},
		{
			title: 'Rust',
			image: '/images/logos/rust.svg',
			experienceInYears: 1,
			level: SkillLevel.beginner
		},
		{
			title: 'Lua',
			image: '/images/logos/lua.svg',
			experienceInYears: 1,
			level: SkillLevel.beginner
		}
	].sort((a, b) => b.experienceInYears - a.experienceInYears);

	let frameworks: SkillCardInfo[] = [
		{
			title: 'Next.js',
			image: '/images/logos/nextjs.svg',
			experienceInYears: getYearsSince(2021),
			level: SkillLevel.advanced
		},
		{
			title: 'Nuxt',
			image: '/images/logos/nuxt.svg',
			experienceInYears: getYearsSince(2020),
			level: SkillLevel.advanced
		},
		{
			title: 'React Native',
			image: '/images/logos/react.svg',
			experienceInYears: getYearsSince(2021),
			level: SkillLevel.intermediate
		},
		{
			title: 'SvelteKit',
			image: '/images/logos/svelte.svg',
			experienceInYears: getYearsSince(2022),
			level: SkillLevel.intermediate
		},
		{
			title: 'Asp.Net Core',
			image: '/images/logos/aspnet.svg',
			experienceInYears: getYearsSince(2019),
			level: SkillLevel.intermediate
		},
		{
			title: 'Bootstrap',
			image: '/images/logos/bootstrap.svg',
			experienceInYears: getYearsSince(2020),
			level: SkillLevel.intermediate
		},
		{
			title: 'Avalonia UI',
			image: '/images/logos/avalonia.svg',
			experienceInYears: getYearsSince(2021),
			level: SkillLevel.intermediate
		},
		{
			title: 'Vite',
			image: '/images/logos/vitejs.svg',
			experienceInYears: getYearsSince(2022),
			level: SkillLevel.beginner
		}
	].sort((a, b) => b.experienceInYears - a.experienceInYears);
</script>

<HeroBanner />

<div class="page-content">
	<section class="info-section" id="projects">
		<h2 class="section-title">Projects</h2>
		<div class="projects indent-section">
			{#each projects as project (project.title)}
				<ProjectCard {...project} />
			{/each}
		</div>
	</section>

	<section class="info-section" id="about">
		<h2 class="section-title">About Me</h2>
		<div class="about-content indent-section">
			<div class="info-wrapper">
				<p>
					Hello! My name is Massine Mouha, a 21-year-old Moroccan software developer who is
					passionate about coding and technology. With 4 years of freelance experience under my
					belt, I have worked on various projects, ranging from Facebook scrapers to desktop app
					development and mobile development. I am well-versed in multiple programming languages and
					frameworks, including advanced C#, TypeScript, Rust, React Native, React, Next.js, Nuxt,
					Vue, and Svelte.
				</p>
				<p>
					I hold a license in software development and am currently furthering my education to
					broaden my knowledge and skillset in the industry. Despite being a front-end enthusiast,
					my true passion lies in back-end development. I find great satisfaction in creating
					efficient, reliable, and scalable back-end systems.
				</p>
				<p>
					When I'm not coding, I enjoy working out, gaming, and exploring new technologies, as
					coding itself is my prime hobby. I am a firm believer in continuous learning and personal
					growth, striving to improve my skills and adapt to the ever-evolving world of software
					development.
				</p>
				<p>
					If you're interested in collaborating on a project or just want to say hello, please feel
					free to <a href="#contact">get in touch!</a>
				</p>
			</div>
			<blockquote>
				<p>
					"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for
					a lifetime."
				</p>
				--<i>Muhammad Waseem</i>
			</blockquote>
		</div>
	</section>

	<section class="info-section" id="skills">
		<h2 class="section-title">Skills</h2>

		<div>
			<h3 class="section-subtitle accent-phase-text">Programming Languages</h3>
			<div class="indent-section skill-list">
				{#each skills as skill}
					<SkillCard info={skill} />
				{/each}
			</div>
			<h3 class="section-subtitle highlight-phase-text">Frameworks And Tools</h3>
			<div class="indent-section skill-list">
				{#each frameworks as framework}
					<SkillCard info={framework} />
				{/each}
			</div>
		</div>
	</section>

	
	<section class="info-section contact-section" id="contact">
		<h2 class="section-title">Contact Me</h2>

		<div class="contact-methods">
			<form class="contact-form" method="post">
				<h3 class="section-subtitle accent-phase-text" style="margin: 0;">Send a message!</h3>

				<label for="name">Name</label>
				<input name="name" id="name" />

				<label for="name">Email</label>
				<input name="email" id="email" />

				<label for="name">Subject</label>
				<input name="subject" id="subject" />

				<label for="name">Message</label>
				<textarea name="message" id="message" />

				<button class="contact-submit mixed-phase-text" type="submit">Send</button>
			</form>
		</div>
	</section>

</div>

<section class="footer">
	<h3>Developed by <span class="mixed-phase-text">Massine Mouha</span> with <span class="mixed-phase-text">Svelte Kit</span></h3>
	<h3 class="mixed-phase-text">Copyright © {new Date().getFullYear()}</h3>
</section>

<style lang="scss">
	.projects {
		display: grid;
		grid-gap: rem(20);

		grid-template-columns: repeat(3, 1fr);

		@include tablet {
			grid-template-columns: repeat(2, 1fr);
		}

		@include mobile {
			grid-template-columns: repeat(1, 1fr);
		}
		flex-wrap: wrap;

		@include mobile {
			align-items: center;
		}

		@include tablet {
			justify-content: center;
		}
	}

	.about-content {
		display: flex;
		gap: rem(50);
		flex-wrap: wrap;
		align-items: center;

		@include mobile-tablet {
			justify-content: space-evenly;
		}

		.info-wrapper {
			max-width: 75ch;
		}

		blockquote {
			margin: rem(50) 0;
			padding: rem(20);
			font-style: italic;
			border-left: rem(2) solid $accent-color;
			font-size: rem(18);
			color: var(--color-primary);

			p {
				width: 25ch;
			}
		}
	}

	.skill-list {
		display: flex;
		flex-wrap: wrap;
		gap: rem(40);
		justify-content: flex-start;

		@include mobile-tablet {
			justify-content: space-evenly;
		}
	}

	.contact-section {
		.contact-methods {
			display: flex;
			grid-template-columns: repeat(2, 1fr);

			@include mobile-tablet {
				display: flex;
				flex-direction: column;
			}

			.contact-form {
				margin: 0 auto;
				grid-column: 2;
				display: flex;
				flex-direction: column;
				padding: rem(25);
				width: rem(500);

				@include tablet {
					grid-column: 1;
					width: rem(450);
				}

				@include mobile {
					width: 100%;
				}

				border-radius: rem(5);

				background-color: $primary-color-hover;
				border: rem(2) solid $highlight-color;
				box-shadow: 0 0 0 rem(1) $accent-color;

				label {
					margin-top: rem(20);
					margin-bottom: rem(5);
				}

				input,
				textarea {
					padding: rem(10);
					border-radius: rem(5);
					background-color: $primary-color;
					border: rem(2) solid $highlight-color;
					box-shadow: 0 0 0 rem(1) $accent-color;
					color: $text-color;
					font-size: rem(16);
				}

				textarea {
					resize: vertical;
					min-height: rem(100);
				}

				.contact-submit {
					margin-top: rem(50);
					padding: rem(15) rem(0);
					font-family: $heading-font;
					font-size: rem(18);
					background-color: lighten($primary-color-hover, 10%);
					border: none;
					box-shadow: rem(5) rem(5) 0 0 $accent-color, rem(-5) rem(-5) 0 0 $highlight-color;
					color: $text-color;

					&:hover,
					&:active {
						background-color: lighten($primary-color-hover, 15%);
						box-shadow: rem(5) rem(5) 0 0 $accent-color-hover,
							rem(-5) rem(-5) 0 0 $highlight-color-hover;
					}

					&:focus {
						background-color: darken($primary-color-hover, 5%);
						box-shadow: rem(5) rem(5) 0 0 $accent-color-hover,
							rem(-5) rem(-5) 0 0 $highlight-color-hover;
					}
				}
			}
		}
	}

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
