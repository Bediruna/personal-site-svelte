<script>
    import ThemeToggle from "../components/ThemeToggle.svelte";
</script>

<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <!-- Left nav items -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li class="nav-item">
                <a class="nav-link" href="/">BEDIR</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/resume">RESUME</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/work">WORK</a>
            </li>
        </ul>

        <!-- Right nav items -->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="https://www.linkedin.com/in/bedir-aygun"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </li>
            <li class="nav-item">
                <a
                    class="nav-link"
                    href="https://github.com/bediruna"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li class="nav-item">
                <ThemeToggle />
            </li>
        </ul>
    </div>
</nav>

<style>
    .nav-link {
        font-size: 1.3rem; /* Equivalent to fs-5 */
        color: var(--text-color) !important; /* Uses theme variable */
    }
</style>
