<script>
    import ThemeToggle from "../components/ThemeToggle.svelte";
</script>

<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li class="nav-item">
                <a class="nav-link" href="/">BEDIR</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/resume">RESUME</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="/work">Work</a>
            </li> -->
        </ul>
        <ThemeToggle />
    </div>
</nav>

<style>
    .nav-link {
        font-size: 1.3rem; /* Equivalent to fs-5 */
        color: var(--text-color) !important; /* Uses theme variable */
    }
</style>
