<!-- <script>
	const projects = [
		{
			title: "Project One",
			description: "Brief description of what this project does.",
			link: "https://github.com/yourusername/project-one"
		},
		{
			title: "Project Two",
			description: "Another cool project description.",
			link: "https://github.com/yourusername/project-two"
		},
		// Add more projects here
	];
</script> -->
<script>
	import { onMount } from 'svelte';

	let projects = [];

	onMount(async () => {
		const res = await fetch('https://api.github.com/users/bediruna/repos');
		const data = await res.json();
		projects = data
			.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
			.slice(0, 5)
			.map(repo => ({
				title: repo.name,
				description: repo.description || 'No description provided.',
				link: repo.html_url
			}));
	});
</script>


<div class="container my-5">
	<h2 class="text-center mb-4">My most recent work</h2>
	<div class="grid gap-4 md:grid-cols-2">
		{#each projects as project}
			<div class="card p-4 border rounded shadow">
				<h3 class="text-xl font-semibold mb-2">{project.title}</h3>
				<p class="mb-3">{project.description}</p>
				<a href={project.link} target="_blank" class="text-blue-600 underline">View on GitHub</a>
			</div>
		{/each}
	</div>
</div>
