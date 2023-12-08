<script>
  import "../app.pcss";
  import Footer from "./components/Footer.svelte";
  import Navbar from "./components/Navbar.svelte";
</script>

<div>
  <Navbar />
  <slot />
  <Footer />
</div>