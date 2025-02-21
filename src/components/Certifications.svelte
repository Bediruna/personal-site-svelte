<script>
    export let certifications = [];
</script>

<div id="mainCard">
    <h2 class="p-3">
        <i class="fa fa-certificate fa-fw me-2"></i>Certifications
    </h2>
    {#each certifications as cert}
        <div class="p-3">
            <h5 class="fw-bold">{cert.name}</h5>
            <h6 class="text-primary">
                <i class="fa fa-calendar fa-fw me-2"></i>{cert.date}
            </h6>
            {#if cert.id}
                <p>ID: {cert.id}</p>
            {/if}
            <hr />
        </div>
    {/each}
</div>
