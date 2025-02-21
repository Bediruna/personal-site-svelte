<script>
  import { onMount } from 'svelte';
  import SunIcon from './icons/SunIcon.svelte';
  import MoonIcon from './icons/MoonIcon.svelte';

  let theme = 'light';

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  });

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
</script>

<button on:click={toggleTheme} aria-label="Toggle theme" style="color: var(--icon-color);">
  {#if theme === 'light'}
    <SunIcon />
  {:else}
    <MoonIcon />
  {/if}
</button>

<style>
  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  svg {
    width: 32px;
    height: 32px;
  }
</style>