<script lang="ts">
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { register } from 'swiper/element/bundle';
    import { Button } from '$lib/components/ui/button';
    import { Play } from 'lucide-svelte';
    register();

    let imagesCarousel: {
        id: number;
        _embedded: {
            'wp:featuredmedia': {
                0: {
                    source_url: string;
                }
            }
        }
    }[] = [];
    const fetchData = async () => {
        const res = await axios.get('http://localhost:8000/wp-json/wp/v2/carousel?_embed');
        imagesCarousel = res.data;
    }
    onMount(() => {
        fetchData();
    })
</script>

<div>
    <swiper-container
        slides-per-view={1}
        centered-slides={true}
        autoplay={{
            delay:10000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={{
            clickable: true,
        }}
        effect='fade'
        class="relative"
    >
        <div class='absolute top-0 left-0 w-2/3 blur-3xl h-full bg-black opacity-60 z-10'></div>
        <div class="absolute top-1/3 left-24 text-white z-10 w-2/5">
            <div class="flex flex-col text-white">
                <span class="text-5xl ">Welcome to Hasanuddin University</span>
                <span class="text-5xl ">Department of Physics</span>
                <p class="text-xl mt-2"><i>Embark on a journey to unveil the true nature of reality, from the grandest cosmic scales to the tiniest subatomic particles</i></p>
            </div>
            <Button class='bg-redUH-500 text-white hover:bg-redUH-600 active:bg-redUH-700 mt-6 rounded-full'>
                <Play class='h-5 w-5 mr-2 font-light' strokeWidth=2 />Watch our Introduction Video
            </Button>
        </div>
        {#each imagesCarousel as image}
            <swiper-slide>
                <img src={image._embedded['wp:featuredmedia'][0].source_url} alt="img" class="w-screen h-screen"/>
            </swiper-slide>
        {/each}
    </swiper-container>
</div>

<div>
    Hello world
</div>