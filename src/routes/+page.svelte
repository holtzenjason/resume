<script lang="ts">
	import Header from '../lib/_header.svelte';
	import Aside from '../lib/_aside.svelte';
	import Section from '../lib/_section.svelte';
	import Subsection from '../lib/_subsection.svelte';
	import { winWidth } from '../lib/store.js';

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
<div class="contained">
	<main>
		<Section title="summary">
			<p>
				I am a Full-Stack JavaScript Developer with 5+ years of development experience. Two years
				ago, I picked up Svelte (and SvelteKit) for a pet project and was instantly hooked. Now, I'm
				seeking a role where I can couple my JavaScript experience with my love and understanding of
				Svelte to make a big impact.
			</p>
		</Section>
		<Section title="experience">
			<Subsection
				titleMain="Developer "
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
				titleMain="Web Developer &amp; Designer"
				titleExtra="Phillips 66 Co."
				subtext="2016 - Present"
			>
				<ul>
					<li>
						Designed and coded cutover of 5 corporate internet sites to a backend CMS, using
						JavaScript, Java, and Liquid templates.
					</li>
					<li>
						Developed and tested numerous feature releases in Azure, utilizing the Agile methodology
						to get important features to business users quickly.
					</li>
					<li>
						Rolled out custom SharePoint landing page to 13,000 internal users, which included both
						design and development efforts.
					</li>
					<li>
						Performed well remotely on both large teams and solo efforts by utilizing communications
						and organization tools like Microsoft Teams and Trello.
					</li>
				</ul>
			</Subsection>
			<Subsection
				titleMain="Lead Service Desk Analyst"
				titleExtra="Phillips 66 Co."
				subtext="2012 - 2016"
			>
				<ul>
					<li>
						Led a team of 10 people, which included training, coaching, and documentation of both
						internal and external systems.
					</li>
					<li>
						Developed training plan, which saved the company $240,000 per year in support costs.
					</li>
					<li>
						Spoke at live IT events to promote new technologies and introduce new applications
					</li>
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
				<li>
					Woodworking: Measure twice; cut once...because there is also beauty in proper planning.
				</li>
			</ul>
		</Section>
	</main>
	<Aside />
</div>

<style lang="scss">
	.contained {
		display: flex;
		flex-flow: row nowrap;
		width: 100%;
		height: 100%;
		@media only screen and (max-width: 650px) {
			flex-flow: column nowrap;
		}
	}
	main {
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-start;
		position: relative;
		padding: 0.5em 2em;
		max-height: 100%;
		width: auto;
		order: 2;
	}
	ul {
		font-size: 1.1rem;

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
