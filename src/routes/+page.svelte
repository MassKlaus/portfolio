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

<div class="page-content">
	<section class="info-section" id="projects">
		<h1 class="section-title">Projects</h1>
		<div class="projects indent-section">
			{#each projects as project (project.title)}
				<ProjectCard {...project} />
			{/each}
		</div>
	</section>
	
	<section class="info-section" id="about">
		<h1 class="section-title">About Me</h1>
		<div class="about-content indent-section">
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
	
	
	<section class="info-section" id="about">
		<h1 class="section-title">Skills</h1>
		<!--Listing Skills and Technologies worked with-->
		<!--
			Technical Skills:
	
		Programming Languages: C#, JavaScript, TypeScript, HTML, CSS, SQL, Python, C, C++, Rust, Bash, Lua, PHP, Nu
		Frameworks: ASP.NET, WPF, Avalonia, Unity, React, Angular, Vue, Vite, Nuxt, Next, Svelte, Svelte Kit, React Native, SDL, OpenCV, Bootstrap, WindiCSS, Bulma, EntityFramework
		Libraries: Axios
		Databases: MySQL, SQLite, Microsoft SQL Server
		Version Control: Git, GitHub
		Package Managers: npm, Cargo, pip, NuGet
		Build Tools: Vite
		Testing: Selenium
		Deployment: Cloudflare Pages
		Mobile Development: React Native
	
	Experience:
	
		Implemented a wide range of applications and projects, working as a freelance developer since late 2018.
		Developed software using languages and frameworks such as C#, TypeScript, React, and Vue.
		Created a variety of applications including web scrapers, recipe managers, and game server management tools.
		Successfully adapted open-source software, such as youtube-dl, for custom use.
		Demonstrated experience with Cloudflare Pages and Cloudflare Workers.
		Utilized UML diagrams for data representation.
		Maintained a strong understanding of SOLID principles, adhering to the DRY rule and the single responsibility principle.
		-->
		<div>
			<h2>Technical Skills</h2>
			<ul>
				<li>Programming Languages: C#, JavaScript, TypeScript, HTML, CSS, SQL, Python, C, C++, Rust, Bash, Lua, PHP, Nu</li>
				<li>Frameworks: ASP.NET, WPF, Avalonia, Unity, React, Angular, Vue, Vite, Nuxt, Next, Svelte, Svelte Kit, React Native, SDL, OpenCV, Bootstrap, WindiCSS, Bulma, EntityFramework</li>
				<li>Libraries: Axios</li>
				<li>Databases: MySQL, SQLite, Microsoft SQL Server</li>
				<li>Version Control: Git, GitHub</li>
				<li>Package Managers: npm, Cargo, pip, NuGet</li>
				<li>Build Tools: Vite</li>
				<li>Testing: Selenium</li>
				<li>Deployment: Cloudflare Pages</li>
				<li>Mobile Development: React Native</li>
			</ul>
	
			<h2>Experience</h2>
			<ul>
				<li>Implemented a wide range of applications and projects, working as a freelance developer since late 2018.</li>
				<li>Developed software using languages and frameworks such as C#, TypeScript, React, and Vue.</li>
				<li>Created a variety of applications including web scrapers, recipe managers, and game server management tools.</li>
				<li>Successfully adapted open-source software, such as youtube-dl, for custom use.</li>
				<li>Demonstrated experience with Cloudflare Pages and Cloudflare Workers.</li>
				<li>Utilized UML diagrams for data representation.</li>
				<li>Maintained a strong understanding of SOLID principles, adhering to the DRY rule and the single responsibility principle.</li>
			</ul>
		</div>
	</section>
</div>

<div style="height: 100vh;" />

<style lang="scss">
	.projects {
		display: flex;
		gap: rem(20);
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
</style>
