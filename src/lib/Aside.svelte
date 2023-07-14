<script>
	import { mobileShow } from './store';
	import MDI from './Icons/MDI.svelte';
	import SimpleIcon from './Icons/SimpleIcon.svelte';

	const iconSize = '1em';
	import { slashBreak } from './_mobileActions.js';
	import IconText from './Icons/IconText.svelte';
</script>

<aside>
	<div class="contactInfo">
		<ul>
			<li class="print-only">
				<IconText>
					<MDI name="mdiAccount" size={iconSize} color="white" slot="icon" />
					<a href="https://resume.holtzen.rocks">resume.holtzen.rocks</a>
				</IconText>
			</li>
			<li>
				<IconText srText="email" gap="1em">
					<MDI name="mdiEmail" size={iconSize} color="white" slot="icon" />
					<a href="mailto:jason@holtzen.rocks" use:slashBreak>jason@holtzen.rocks</a>
				</IconText>
			</li>
			<li>
				<IconText srText="phone" gap="1em">
					<MDI name="mdiCellphoneMessage" size={iconSize} color="white" slot="icon" />
					<a href="tel:6027933898">602.793.3898</a>
				</IconText>
			</li>
			<li>
				<IconText srText="location" gap="1em">
					<MDI name="mdiMapMarker" size={iconSize} color="white" slot="icon" />
					<a href="https://goo.gl/maps/8jWWf13qeKmfcQm56" target="_blank">
						<address>Bartlesville, OK</address>
					</a>
				</IconText>
			</li>
			<li>
				<IconText srText="LinkedIn" gap="1em">
					<SimpleIcon name="siLinkedin" size={iconSize} color="white" slot="icon" />
					<a href="https://www.linkedin.com/in/holtzen" target="_blank" use:slashBreak
						>linkedin.com/in/holtzen</a
					>
				</IconText>
			</li>
			<li>
				<IconText srText="Discord" gap="1em">
					<SimpleIcon name="siDiscord" size={iconSize} color="white" slot="icon" />
					<a href="https://discordapp.com/users/holtzen#8590" target="_blank">holtzen#8590</a>
				</IconText>
			</li>
			<li class="print-hidden">
				<IconText srText="Calendly" gap="1em">
					<MDI name="mdiCalendarClock" size={iconSize} color="white" slot="icon" />
					<a href="https://calendly.com/holtzen/talk" target="_blank">Schedule meeting</a>
				</IconText>
			</li>
		</ul>
	</div>
	<hr />
	<div class="skills">
		<h4>Core Skills</h4>
		<ul>
			<li>
				<IconText gap="1em">
					<SimpleIcon name="siSvelte" size={iconSize} useHex slot="icon" />
					Svelte
				</IconText>
			</li>
			<li>
				<IconText gap="1em">
					<SimpleIcon name="siTypescript" size={iconSize} useHex slot="icon" />
					TypeScript
				</IconText>
			</li>
			<li>
				<IconText gap="1em">
					<SimpleIcon name="siSass" size={iconSize} useHex slot="icon" />
					Web Design
				</IconText>
			</li>
			<li>
				<IconText gap="1em">
					<SimpleIcon name="siPlaywright" size={iconSize} useHex slot="icon" />
					Playwright
				</IconText>
			</li>
			<li>
				<IconText gap="1em">
					<SimpleIcon name="siMongodb" size={iconSize} useHex slot="icon" />
					MongoDB
				</IconText>
			</li>
			<li>
				<IconText gap="1em">
					<MDI name="mdiDatabase" size={iconSize} color="white" slot="icon" />
					SQL
				</IconText>
			</li>
			<li>
				<IconText gap="1em">
					<SimpleIcon name="siReact" size={iconSize} useHex slot="icon" />
					React
				</IconText>
			</li>
		</ul>
	</div>
	<hr />
	{#if !$mobileShow}
		<div class="edu">
			<h4>Education</h4>
			<ul>
				<li>
					<strong>Bachelor's of Science</strong><br />
					<small> Software Development </small>
					<small>
						<a href="https://www.wgu.edu">WGU</a>
					</small>
				</li>
				<li>
					<strong>Project+ Certification</strong>
					<br />
					<small>CompTIA</small>
				</li>
				<li>
					<strong>A+ Certification</strong>
					<br />
					<small>CompTIA</small>
				</li>
			</ul>
		</div>
		<hr />
		<div class="mywork">
			<h4>My work</h4>
			<ul>
				<li>
					<a href="https://casterfire.holtzen.rocks">casterfire.holtzen.rocks</a>
				</li>
				<li>
					<a href="https://resume.holtzen.rocks">resume.holtzen.rocks</a>
				</li>
				<li>
					<a href="https://www.phillips66.com">phillips66.com</a>
				</li>
			</ul>
		</div>
		<hr />
		<div class="footnote">This site is print-friendly.</div>
	{/if}
</aside>

<style lang="scss">
	aside {
		background: #333;
		color: white;
		display: flex;
		flex-flow: column nowrap;
		grid-area: aside;
		justify-content: space-around;
		font-size: 1.2rem;
		padding: 1.5rem;
		position: relative;
		height: auto;
		letter-spacing: 1px;
		order: 1;

		@media only screen and (max-width: 650px) {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			padding: 2rem 1rem;
			height: fit-content;
		}

		@media print {
			background: none;
			border-right: 2px solid #eee;
			font-size: 1rem;
			color: #333;
			padding: 1rem 1rem 0;
		}
	}
	h4 {
		color: var(--c1-light);
		font-size: 1.2rem;
		text-transform: uppercase;
		margin-left: 0;

		@media print {
			font-weight: bold;
			text-decoration: underline;
		}
	}
	address {
		font-style: normal;
	}

	hr {
		border: none;
		display: block;
		background-image: linear-gradient(85deg, var(--c1), var(--c2-dark));
		height: 0.3rem;
		margin: 1rem auto;
		width: 70%;

		@media only screen and (max-width: 650px) {
			display: none;
		}

		@media print {
			height: 0.2rem;
		}
	}

	div {
		position: relative;

		@media only screen and (max-width: 650px) {
			flex: 1 1 auto;
		}
	}

	ul {
		word-wrap: break-word;
		@media only screen and (max-width: 650px) {
			width: 100%;
		}
	}

	li {
		display: flex;
		flex-flow: row nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		margin-bottom: 0.5em;

		@media only screen and (max-width: 650px) {
			--indent: 0.8rem;
			padding-left: var(indent);
			text-indent: calc(-1 * var(--indent));
		}

		&.print-only {
			display: none;
			@media print {
				display: flex;
			}
		}

		a {
			&,
			&:visited,
			&:active,
			&:focus {
				color: var(--c2);
				@media print {
					color: #555 !important;
				}
			}
		}
	}

	.contactInfo {
		@media only screen and (max-width: 650px) {
			height: 100%;

			ul {
				display: flex;
				flex-flow: column wrap;
				justify-content: space-evenly;
				height: 100%;
				padding-right: 5px;
				li {
					display: grid;
					place-items: center;
					min-height: 22px;
					max-width: 100%;
					width: 100%;
				}
			}
		}
	}

	.skills {
		ul {
			li {
				display: block;
				margin-bottom: 0.125em;

				strong {
					text-decoration: underline;
					text-transform: uppercase;
				}
			}
		}
		@media only screen and (max-width: 650px) {
			flex: 0 0 auto;
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-between;
			h4 {
				margin-top: 0;
				flex: 0 0 auto;
			}

			ul {
				flex: 1 1 100%;
				display: flex;
				flex-flow: column nowrap;
				justify-content: space-evenly;
				li {
					display: block;
					margin-bottom: 0.3em;
					&:last-of-type {
						margin: 0;
					}
				}
			}
		}
	}

	.edu ul {
		li {
			display: block;
			margin-bottom: 1rem;

			strong {
				text-transform: uppercase;
			}
		}
		small {
			font-size: 0.9em;
		}

		a {
			@media print {
				display: inline-block;
				margin: 0;
			}
		}
	}
	.mywork a {
		margin-left: 0;
	}
	.footnote {
		@media print {
			display: none;
		}
	}
</style>
