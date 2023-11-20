<script lang="ts">
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { register } from 'swiper/element/bundle';
    import { Button } from '$lib/components/ui/button';
    import { Separator } from "$lib/components/ui/separator";
    import { Play, ArrowRight } from 'lucide-svelte';
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

<div class="carousel">
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
        <div class='absolute top-0 left-0 w-2/3 blur-3xl h-full bg-black opacity-70 z-10'></div>
        <div class="flex flex-col gap-y-6 absolute top-1/3 left-24 text-white z-10 w-2/5">
            <p class="text-4xl font-bold">Welcome to Hasanuddin University Department of Physics</p>
            <p class="text-lg font-medium text-slate100"><i>"Embark on a journey to unveil the true nature of reality, from the grandest cosmic scales to the tiniest subatomic particles"</i></p>
            <Button class='w-fit font-medium bg-redUH-500 text-white hover:bg-redUH-600 active:bg-redUH-700 rounded-full'>
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

<div class="programs flex justify-center items-center gap-x-14 my-20 mx-auto px-10 max-w-7xl">
    <div class="flex flex-col gap-y-8 mx-auto justify-center w-2/5">
        <div class="flex flex-col gap-y-4">
            <h2 class="scroll-m-20 text-3xl font-bold tracking-tight transition-colors first:mt-0">
                Undergraduate Programs
            </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolores deleniti aut modi minus voluptatibus?</p>
            <Button class='w-fit font-medium bg-darkgreenUH-500 text-white hover:bg-darkgreenUH-600 active:bg-blueUH-700 rounded-lg'>
                Learn More <ArrowRight class='ml-2 h-5 w-5' strokeWidth=2 />
            </Button>
        </div>
        <Separator class='bg-slate-400'/>
        <div class="flex flex-col gap-y-4">
            <h2 class="scroll-m-20 text-3xl font-bold tracking-tight transition-colors first:mt-0">
                Graduate Programs
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita laborum voluptas fugiat tenetur eligendi.</p>
            <Button class='w-fit font-medium bg-darkgreenUH-500 text-white hover:bg-darkgreenUH-600 active:bg-blueUH-700 rounded-lg'>
                Learn More <ArrowRight class='ml-2 h-5 w-5' strokeWidth=2 />
            </Button>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 w-3/5">
        <div class="overflow-hidden">
            <img src="https://plus.unsplash.com/premium_photo-1666788168307-261f7905225e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="img" class="h-52 w-full hover:scale-125 transition duration-500 cursor-pointer object-cover rounded-lg">
        </div>
        <div class="overflow-hidden col-span-2">
            <img src="https://plus.unsplash.com/premium_photo-1666788168307-261f7905225e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="img" class="h-52 w-full hover:scale-125 transition duration-500 cursor-pointer object-cover rounded-lg">
        </div>
        <div class="overflow-hidden col-span-2 cursor-pointer">
            <img src="https://plus.unsplash.com/premium_photo-1666788168307-261f7905225e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="img" class="h-52 w-full hover:scale-125 transition duration-500 cursor-pointer object-cover rounded-lg">
        </div>
        <div class="overflow-hidden cursor-pointer">
            <img src="https://plus.unsplash.com/premium_photo-1666788168307-261f7905225e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="img" class="h-52 w-full hover:scale-125 transition duration-500 cursor-pointer object-cover rounded-lg">
        </div>
    </div>
</div>