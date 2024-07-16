<script>
    export let education = [];
</script>

<div id="mainCard">
    <h2 class="p-3"><i class="fa fa-book fa-fw me-2"></i>Education</h2>
    {#each education as edu}
        <div class="p-3">
            <h5 class="fw-bold">{edu.institution}</h5>
            <h6 class="text-primary">
                <i class="fa fa-calendar fa-fw me-2"></i>{edu.period}
            </h6>
            <p>{edu.degree}</p>
            <hr />
        </div>
    {/each}
</div>
