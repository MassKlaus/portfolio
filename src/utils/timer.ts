import { onDestroy } from 'svelte';

export function onInterval(callback: TimerHandler, miliseconds: number) {
	const interval = setInterval(callback, miliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}
