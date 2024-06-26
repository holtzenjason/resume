<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Aside from '$lib/Aside.svelte';
	import Section from '$lib/Section.svelte';
	import Subsection from '$lib/Subsection.svelte';
	import { winWidth } from '$lib/store';

	let currentWidth: number;
	$: $winWidth.current = currentWidth;
</script>

<svelte:window bind:innerWidth={currentWidth} />
<svelte:head>
	<title>Jason Holtzen | Resume</title>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Questrial&family=Zilla+Slab:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header />
<main>
	<Section title="summary">
		<p>
			I am a web developer and designer who loves creating web solutions that are both beautiful and
			performant. With over 7 years of development experience spanning everything from startups to
			Fortune 500 companies, I have a proven track record of delivering high-quality, maintainable
			code using SharePoint, React, and Svelte. My passion for creating user-friendly, responsive,
			and accessible web applications will make me a valuable asset to any team.
		</p>
	</Section>
	<Section title="experience">
		<Subsection titleMain="Senior Frontend Engineer" titleExtra="SafelyYou" subtext="2022 - 2023">
			<ul>
				<li>
					Designed and developed reusable UI components and pages for internal SvelteKit
					applications.
				</li>
				<li>
					Migrated SvelteKit beta application to SvelteKit 1.0+, including rewrites to auth,
					routing, and data fetching.
				</li>
				<li>Design responsive, cross-browser applications using SCSS and Bootstrap and HTML.</li>
			</ul>
		</Subsection>
		<Subsection
			titleMain="Developer"
			titleExtra="CasterFire.holtzen.rocks"
			subtext="2021 - Present"
		>
			<ul>
				<li>
					Architected, Designed, and Developed a character spell database for <a
						href="https://paizo.com/pathfinder">Pathfinder 2nd Ed.</a
					>
				</li>
				<li>Used Svelte Framework with Sapper and later migrated to SvelteKit.</li>
				<li>Actively participated in Svelte community.</li>
			</ul>
		</Subsection>
		<Subsection
			titleMain="Developer & Team Lead"
			titleExtra="Phillips 66 Co."
			subtext="2012 - 2022"
		>
			<h4>Web Developer & Designer</h4>
			<ul>
				<li>
					Used SharePoint to manage design and content for main corporate website, <a
						href="https://www.phillips66.com">phillips66.com</a
					>, as well as many intranet sites.
				</li>
				<li>
					Developed, designed, and maintained SharePoint Online and 2013 sites, including custom web
					parts and workflows.
				</li>
				<li>
					Designed and developed cutover of 5 corporate internet sites to a backend CMS, using
					React, Java, and Liquid templates.
				</li>
			</ul>
			<h4>Team Lead / Trainer</h4>
			<ul>
				<li>Co-led and coached a team of 34 analysts.</li>
				<li>
					Developed and led Microsoft Office training courses for internal Office users, saving the
					company $240,000 per year in support costs.
				</li>
				<li>Spoke at live IT events to promote new technologies and introduce new applications.</li>
			</ul>
		</Subsection>
	</Section>
	<Section title="hobbies">
		<ul>
			<li>
				Tabletop Games: My pet project, <a href="https://casterfire.holtzen.rocks">CasterFire</a>,
				is for one such game.
			</li>
			<li>Tinkering: I love to figure out what makes things tick.</li>
			<li>Woodworking: Measure twice; cut once...because there is beauty in proper planning.</li>
		</ul>
	</Section>
</main>
<Aside />

<style lang="scss">
	main {
		display: flex;
		flex-flow: column nowrap;
		grid-area: main;
		justify-content: flex-start;
		position: relative;
		padding: 0.5em 2em;
		max-height: 100%;
		width: auto;
		order: 2;

		@media screen and (max-width: 650px) {
			padding: 0 0 5rem 0;
		}
	}
	p {
		margin: 1rem 0;

		@media only screen and (max-width: 650px) {
			padding: 1rem;
		}
	}
	ul {
		font-size: 1.1rem;

		@media only screen and (max-width: 650px) {
			font-size: 1.5rem;
		}

		@media print {
			list-style-type: disc !important;
			list-style-position: inside;
		}

		li {
			position: relative;
			padding-left: 2rem;
			margin-bottom: 0.5rem;
			&::before {
				content: '';
				position: absolute;
				border-radius: 1rem;
				height: 0.3em;
				width: 0.3em;
				background: var(--c2);
				left: 0.4em;
				top: 0.4em;
			}
		}
	}
</style>
