<script>
  import "../app.pcss";
  import Footer from "./components/Footer.svelte";
  import Navbar from "./components/Navbar.svelte";
</script>

<div class=" bg-amber-50">
<Navbar />
<slot />
<Footer />
</div>