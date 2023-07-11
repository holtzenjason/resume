import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import { createTippy } from 'svelte-tippy';

export const tooltip = createTippy({
	arrow: false,
	placement: 'left',
	theme: 'material'
});
