<script lang="ts">
	import HeroBanner from '../components/home/heroBanner.svelte';
	import ProjectCard from '../components/projects/projectCard.svelte';
	import type { Project } from '../types/projects';

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
</script>

<HeroBanner />

<section class="info-section" id="projects">
	<h1 class="section-title">Projects</h1>
	<div class="projects">
		{#each projects as project (project.title)}
			<ProjectCard {...project} />
		{/each}
	</div>
</section>

<section class="info-section" id="about">
	<h1 class="section-title">About Me</h1>
	<div class="about-content">
		<div class="info-wrapper">
			<p>
				Hello! My name is Massine Mouha, a 21-year-old Moroccan software developer who is passionate
				about coding and technology. With 4 years of freelance experience under my belt, I have
				worked on various projects, ranging from Facebook scrapers to desktop app development and
				mobile development. I am well-versed in multiple programming languages and frameworks,
				including advanced C#, TypeScript, Rust, React Native, React, Next.js, Nuxt, Vue, and
				Svelte.
			</p>
			<p>
				I hold a license in software development and am currently furthering my education to broaden
				my knowledge and skillset in the industry. Despite being a front-end enthusiast, my true
				passion lies in back-end development. I find great satisfaction in creating efficient,
				reliable, and scalable back-end systems.
			</p>
			<p>
				When I'm not coding, I enjoy working out, gaming, and exploring new technologies, as coding
				itself is my prime hobby. I am a firm believer in continuous learning and personal growth,
				striving to improve my skills and adapt to the ever-evolving world of software development.
			</p>
			<p>
				If you're interested in collaborating on a project or just want to say hello, please feel
				free to <a href="#contact">get in touch!</a>
			</p>
		</div>
		<blockquote>
			<p>
				"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a
				lifetime."
			</p>
			--<i>Muhammad Waseem</i>
		</blockquote>
	</div>
</section>

<div style="height: 100vh;" />

<style lang="scss">
	.projects {
		display: flex;
		gap: rem(20);
		flex-wrap: wrap;
		padding: 0 rem(20);

		@include mobile {
			align-items: center;
		}

		@include tablet {
			justify-content: center;
		}
	}

	.about-content {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		align-items: center;

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
</style>
