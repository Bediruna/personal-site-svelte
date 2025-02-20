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
    .custom-bg {
        background-color: black !important;
    }

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

    .ms-auto {
        display: flex;
        align-items: center;
    }
    .theme-toggle-btn {
        border: none;
        background: none;
        font-size: 1rem;
        cursor: pointer;
        padding: 8px 12px;
        border-radius: 5px;
        transition: background 0.3s;
    }
</style>
