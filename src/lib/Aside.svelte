<script>
	import { mobileShow } from './store';
	import MDI from './Icons/MDI.svelte';
	import SimpleIcon from './Icons/SimpleIcon.svelte';

	const iconSize = '20px';
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
				<IconText srText="email">
					<MDI name="mdiEmail" size={iconSize} color="white" slot="icon" />
					<a href="mailto:jason@holtzen.rocks" use:slashBreak>jason@holtzen.rocks</a>
				</IconText>
			</li>
			<li>
				<IconText srText="phone">
					<MDI name="mdiCellphoneMessage" size={iconSize} color="white" slot="icon" />
					<a href="tel:6027933898">602.793.3898</a>
				</IconText>
			</li>
			<li>
				<IconText srText="location">
					<MDI name="mdiMapMarker" size={iconSize} color="white" slot="icon" />
					<a href="https://goo.gl/maps/8jWWf13qeKmfcQm56" target="_blank">
						<address>Bartlesville, OK</address>
					</a>
				</IconText>
			</li>
			<li>
				<IconText srText="LinkedIn">
					<SimpleIcon name="siLinkedin" size={iconSize} color="white" slot="icon" />
					<a href="https://www.linkedin.com/in/holtzen" target="_blank" use:slashBreak
						>linkedin.com/in/holtzen</a
					>
				</IconText>
			</li>
			<li>
				<IconText srText="Discord">
					<SimpleIcon name="siDiscord" size={iconSize} color="white" slot="icon" />
					<a href="https://discordapp.com/users/holtzen#8590" target="_blank">holtzen#8590</a>
				</IconText>
			</li>
			<li class="print-hidden">
				<IconText srText="Calendly">
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
				<IconText>
					<SimpleIcon name="siSvelte" size="14px" useHex slot="icon" />
					Svelte & SvelteKit
				</IconText>
			</li>
			<li>
				<IconText>
					<SimpleIcon name="siTypescript" size="14px" useHex slot="icon" />
					TypeScript
				</IconText>
			</li>
			<li>
				<IconText>
					<SimpleIcon name="siSass" size="14px" useHex slot="icon" />
					Web Design
				</IconText>
			</li>
			<li>
				<IconText>
					<SimpleIcon name="siPlaywright" size="14px" useHex slot="icon" />
					Playwright
				</IconText>
			</li>
			<li>
				<IconText>
					<SimpleIcon name="siMongodb" size="14px" useHex slot="icon" />
					MongoDB
				</IconText>
			</li>
			<li>
				<IconText>
					<MDI name="mdiDatabase" size="14px" color="white" slot="icon" />
					SQL
				</IconText>
			</li>
			<li>
				<IconText>
					<SimpleIcon name="siReact" size="14px" useHex slot="icon" />
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
			flex: 1 1 50%;
			flex-flow: row nowrap;
			justify-content: space-between;
			font-size: 1.5rem;
		}

		@media print {
			background: none;
			border-right: 2px solid #333;
			font-size: 1rem;
			color: #333;
			padding: 1rem 1rem 0;
		}
	}
	h4 {
		font-size: 1.2rem;
		text-transform: uppercase;
		margin-left: 0;
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
			position: absolute;
			right: 0;
			top: 15%;
			height: 70%;
			width: 0.3rem;
		}

		@media print {
			height: 0.2rem;
		}
	}

	div {
		position: relative;

		@media only screen and (max-width: 650px) {
			width: 50%;
		}
	}

	ul {
		word-wrap: break-word;
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
			width: 40%;

			ul {
				display: flex;
				flex-flow: column wrap;
				justify-content: space-evenly;
				height: 100%;
				padding-right: 5px;
				li {
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
			display: flex;
			flex-flow: column nowrap;
			height: 100%;
			width: 55%;

			h4 {
				margin-top: 0;
			}

			ul {
				columns: 2;
				height: 100%;
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
	@media print {
		h4 {
			font-weight: bold;
			text-decoration: underline;
		}
	}
</style>
