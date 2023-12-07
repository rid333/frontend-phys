<script lang="ts">
    import { register } from 'swiper/element/bundle';
    import { Button } from '$lib/components/ui/button';
    import { Separator } from "$lib/components/ui/separator";
    import { Play, ArrowRight, ExternalLink } from 'lucide-svelte';
    import type { PageData } from './$types';
    register();

    export let data: PageData;
    const { images } = data;
</script>


<!-- Image carousel -->
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
            <p class="text-5xl font-bold">Welcome to Hasanuddin University Department of Physics</p>
            <p class="text-xl font-medium text-slate100"><i>"Embark on a journey to unveil the true nature of reality, from the grandest cosmic scales to the tiniest subatomic particles"</i></p>
            <Button class='w-fit bg-opacity-75 font-medium bg-redUH-500 text-white hover:bg-redUH-600 active:bg-redUH-700 rounded-none'>
                <Play class='h-5 w-5 mr-2 font-light' strokeWidth=2 />Watch our Introduction Video
            </Button>
        </div>
        {#each images as image}
            <swiper-slide>
                <img src={image} alt="img" class="w-screen h-screen"/>
            </swiper-slide>
        {/each}
    </swiper-container>
</div>


<!-- Undergraduate and Graduate Program -->
<div class="programs flex justify-center items-center gap-x-14 mt-40 mx-auto px-10 max-w-7xl">
    <div class="flex flex-col gap-y-8 mx-auto justify-center w-2/5">
        <div class="flex flex-col gap-y-4">
            <h2 class="italic scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                UNDERGRADUATE PROGRAM
            </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolores deleniti aut modi minus voluptatibus?</p>
            <Button class='w-fit font-medium bg-darkgreenUH-500 hover:bg-darkgreenUH-400 active:scale-95 transition text-white rounded-none'>
                Learn More <ArrowRight class='ml-2 h-5 w-5' strokeWidth=2 />
            </Button>
        </div>
        <Separator class='bg-slate-400'/>
        <div class="flex flex-col gap-y-4">
            <h2 class="italic scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                GRADUATE PROGRAM
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita laborum voluptas fugiat tenetur eligendi.</p>
            <Button class='w-fit font-medium bg-darkgreenUH-500 hover:bg-darkgreenUH-400 active:scale-95 transition text-white rounded-none'>
                Learn More <ArrowRight class='ml-2 h-5 w-5' strokeWidth=2 />
            </Button>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4 w-3/5">
        <div class="overflow-hidden">
            <img src="https://plus.unsplash.com/premium_photo-1666788168307-261f7905225e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="img" class="h-52 w-full hover:scale-125 transition duration-500 cursor-pointer object-cover">
        </div>
        <div class="overflow-hidden col-span-2">
            <img src="https://plus.unsplash.com/premium_photo-1666788168307-261f7905225e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="img" class="h-52 w-full hover:scale-125 transition duration-500 cursor-pointer object-cover">
        </div>
        <div class="overflow-hidden col-span-2 cursor-pointer">
            <img src="https://plus.unsplash.com/premium_photo-1666788168307-261f7905225e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="img" class="h-52 w-full hover:scale-125 transition duration-500 cursor-pointer object-cover">
        </div>
        <div class="overflow-hidden cursor-pointer">
            <img src="https://plus.unsplash.com/premium_photo-1666788168307-261f7905225e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="img" class="h-52 w-full hover:scale-125 transition duration-500 cursor-pointer object-cover">
        </div>
    </div>
</div>

<!-- Research Areas -->
<div class="research-areas flex flex-col my-40 items-center m-auto text-white max-w-7xl">
    <h1 class="italic text-5xl font-medium scroll-m-20 text-black underline mb-20">RESEARCH AREAS</h1>
    <div class="flex items-center justify-center">
        <div class="overflow-hidden">
            <img src="https://images.unsplash.com/photo-1690215230221-25d75d0cd6c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjBzY2VuZXJ5fGVufDB8fDB8fHww" alt="" class="hover:scale-110 transition duration-500 cursor-pointer object-cover">
        </div>
        <div class="box flex flex-col justify-center bg-redUH-400 p-14 w-2/3 gap-y-10 -ml-20 z-0">
            <h1 class="text-4xl font-light">Theoretical and Computation</h1>
            <p class="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi omnis quod inventore impedit possimus quibusdam error. Debitis quam cumque aliquam, at sequi impedit suscipit, ipsa molestiae est inventore itaque vel quia dolor dolorem illum eligendi sapiente adipisci eaque, magnam quibusdam excepturi. Laborum qui quas, repudiandae totam exercitationem quia! Ratione autem quisquam omnis, vitae dolore iste amet veritatis et, excepturi illo cum numquam quia. Ea architecto commodi rem atque maiores, tempora minima perspiciatis? Veniam, repellendus.</p>
            <a href="/" class="bg-white p-4 w-fit"><ExternalLink color='#D7251F' strokeWidth=2 /></a>
        </div>
    </div>
    <div class="flex flex-row-reverse justify-center items-center">
        <div class="overflow-hidden">
            <img src="https://images.unsplash.com/photo-1696737525743-8f81603b5ef0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBzY2VuZXJ5fGVufDB8fDB8fHww" alt="" class="hover:scale-110 transition duration-500 cursor-pointer object-cover">
        </div>
        <div class="box flex flex-col justify-center bg-yellowUH-800 p-14 w-2/3 gap-y-10 -mr-20 z-0">
            <h1 class="text-4xl font-light">Material and Energy</h1>
            <p class="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit reiciendis, nobis ipsum a, nemo tempora et tenetur recusandae sint est unde architecto perferendis eos. Ea accusantium distinctio laudantium nostrum quisquam. Adipisci minima totam aliquam, impedit ea reprehenderit ad accusamus facilis inventore. Nesciunt vero sint, voluptates laudantium magnam repellendus saepe.</p>
            <a href="/" class="bg-white p-4 w-fit"><ExternalLink color='#AEA04E' strokeWidth=2 /></a>
        </div>
    </div>
    <div class="flex justify-center items-center">
        <div class="overflow-hidden w-2/3">
            <img src="https://images.unsplash.com/photo-1657456553828-aef801dae56d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="hover:scale-110 transition duration-500 cursor-pointer object-cover">
        </div>
        <div class="box flex flex-col justify-center bg-blueUH-500 p-14 w-2/3 gap-y-10 -ml-20 z-0">
            <h1 class="text-4xl font-light">Electronics and Instrumentation</h1>
            <p class="font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sunt voluptatem fugit commodi? Quas odit autem aliquam. Suscipit ullam sunt perspiciatis ab dignissimos? A, dolorum. Repellat dignissimos fugiat ipsa et. Asperiores vel consectetur beatae ratione cumque quisquam quam? Repellendus, est numquam atque voluptate quaerat illum repellat? Aspernatur aliquam quod, quas, rem nesciunt voluptatibus quos, deserunt neque officia incidunt accusantium praesentium.</p>
            <a href="/" class="bg-white p-4 w-fit"><ExternalLink color='#010035' strokeWidth=2 /></a>
        </div>
    </div>
    <div class="flex flex-row-reverse justify-center items-center">
        <div class="overflow-hidden">
            <img src="https://images.unsplash.com/photo-1561394706-0f5b464eaa15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0JTIwc2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D" alt="" class="hover:scale-110 transition duration-500 cursor-pointer object-cover">
        </div>
        <div class="box flex flex-col justify-center bg-darkgreenUH-500 p-14 w-2/3 gap-y-10 -mr-20 z-0">
            <h1 class="text-4xl font-light">Optics and Spectroscopy</h1>
            <p class="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis voluptatem quod nobis nostrum quibusdam est alias tempora praesentium, adipisci accusantium incidunt debitis neque reiciendis vitae iusto! Aspernatur, blanditiis. Optio cum excepturi ut unde, quia itaque quibusdam voluptates eveniet blanditiis?</p>
            <a href="/" class="bg-white p-4 w-fit"><ExternalLink color='#0D1F0F' strokeWidth=2 /></a>
        </div>
    </div>
</div>