<script>
    export let education = [];
</script>

<div id="mainCard">
    <h2 class="p-3"><i class="fa fa-book fa-fw me-2"></i>Education</h2>
    {#each education as edu}
        <div class="p-3">
            <h4 class="fw-bold">{edu.degree}</h4>
            <h6>{edu.institution}</h6>
            <h6 class="text-primary">
                <i class="fa fa-calendar fa-fw me-2"></i>{edu.period}
            </h6>
            <hr />
        </div>
    {/each}
</div>
