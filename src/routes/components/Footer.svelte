<script lang="ts">
    import LogoPutih from '../../assets/logoputih.png';
    import {Facebook, Twitter, Instagram, Youtube} from 'lucide-svelte';
    import { Separator } from "$lib/components/ui/separator";
</script>

<footer class="flex flex-col gap-y-8 bg-[#010035] text-slate-400 text-sm p-10">
    <div class="flex flex-col gap-y-4 w-1/2">
        <img src={LogoPutih} alt="Logo Unhas" class="w-36 h-36">
        <p>Jl. Perintis Kemerdekaan No.KM.10, Tamalanrea Indah, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245</p>
        <div class="social-media flex gap-x-5">
            <a href="facebook.com"><Facebook size=22 strokeWidth=1 class='hover:text-white'/></a>
            <a href="x.com"><Twitter size=22 strokeWidth=1 class=' hover:text-white'/></a>
            <a href="instagram.com"><Instagram size=22 strokeWidth=1 class='hover:text-white'/></a>
            <a href="youtube.com"><Youtube size=22 strokeWidth=1 class='hover:text-white'/></a>
        </div>
    </div>
    <div class="flex flex-wrap gap-x-36 gap-y-4">
        <div class="flex flex-col gap-y-1">
            <p class="text-white font-semibold mb-4">Alumni</p>
            <a href="/">Tracer Study Alumni</a>
            <a href="/">Survey Pengguna</a>
            <a href="/">Survey Kepuasan Mahasiswa</a>
            <a href="/">Kuesioner Pemahaman VMST Prodi</a>
            <a href="/">Survey Pengguna Alumni S2 Fisika Unhas</a>
        </div>
        <div class="flex flex-col gap-y-1">
            <p class="text-white font-semibold mb-4">Links</p>
            <a href="/">LMS Unhas</a>
            <a href="/"> SIM Unhas</a>
            <a href="/">Login BKD Unhas</a>
            <a href="/">Login Penelitian Internal</a>
            <a href="/">FMIPA Unhas</a>
            <a href="/">Unhas</a>
            <a href="/">SIMLITABMAS</a>
            <a href="/">KEMERISTEKDIKTI</a>          
        </div>
        <div class="flex flex-col gap-y-1">
            <p class="text-white font-semibold mb-4">Journals</p>
            <a href="/">Unhas E-Journals: Fusi, Jurnal MIPA, Etc.</a>
            <a href="/">APS Journals: Letter A, B, C, D, E, X</a>
            <a href="/">IOP Journals,Journal of Physics A</a>
            <a href="/">Nature Journal: Nature Physics, Science</a>
            <a href="/">Elsevier Journals</a>
        </div>
    </div>
    <Separator class='bg-slate-600 mt-10'/>
    <div class="text-xs">
        <p>© 2023 Copyright - Department of Physics, Hasanuddin University. All rights reserved.</p>
    </div>
</footer>