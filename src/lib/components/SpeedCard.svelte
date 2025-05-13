<script>
    import "aos/dist/aos.css";
    import AOS from "aos";
    import { onMount } from 'svelte';

    onMount(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
        });
    });
</script>

<div
    data-aos="fade-up"
    class="w-full max-w-[470px] h-[211px] md:h-[211px] rounded-[20px] bg-cover bg-center text-white flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_30px_#080A62]"
    style="background-image: url('/Home Page Gradient Product 6.png');"
>
    <div class="w-full flex justify-end items-center mt-[33px] px-6">
        <img src="/Lines.png" alt="" class="h-auto" />
        <img src="/Fast.png" alt="" class="h-auto ml-2" />
    </div>

    <div class="px-6 pb-6 text-[4vw] md:text-[18px]">
        <span class="block font-bold mb-2 text-left">Built for Speed</span>
        <div>
            Optimized for real-time results. You see what's <br />
            new as it happens, not days later.
        </div>
    </div>
</div>
