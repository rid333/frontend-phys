<script>
  import "../app.pcss";
  import Footer from "./components/Footer.svelte";
  import Navbar from "./components/Navbar.svelte";
</script>

<Navbar />
<slot />
<Footer />
