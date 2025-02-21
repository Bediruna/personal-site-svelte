<script>    
    import ThemeToggle from '../components/ThemeToggle.svelte';
</script>

<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/resume">Resume</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="/work">Work</a>
            </li> -->
        </ul>
        <ThemeToggle />
    </div>
</nav>

<style>
    nav ul {
        padding: 0;
        margin: 0;
        display: flex;
    }

    nav ul li {
        margin-right: 20px;
    }

    nav ul li a {
        text-decoration: none;
    }
</style>
