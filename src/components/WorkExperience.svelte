<script>
    export let jobs = [];
</script>

<div id="mainCard">
    <h2 class="p-3">
        <i class="fa fa-suitcase fa-fw me-2"></i>Work Experience
    </h2>
    {#each jobs as job}
        <div class="p-3">
            <h5 class="fw-bold">{job.title}</h5>
            <span class="fst-italic">{job.company}</span>
            <h6 class="text-primary">
                <i class="fa fa-calendar fa-fw me-2"></i>{job.period}
            </h6>
            <p>{job.description}</p>
            <ul>
                {#each job.tasks as task}
                    <li>{task}</li>
                {/each}
            </ul>
            <hr />
        </div>
    {/each}
</div>
