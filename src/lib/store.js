import { writable, derived } from "svelte/store";

export const winWidth = writable({
  threshold: 650,
  current: 651,
});

export const mobileShow = derived(
  winWidth,
  ($winWidth) => $winWidth.threshold > $winWidth.current
);
