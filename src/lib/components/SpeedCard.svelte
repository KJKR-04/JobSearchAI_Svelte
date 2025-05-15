<script>
    import "aos/dist/aos.css";
    import AOS from "aos";
    import { onMount } from "svelte";

    onMount(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
        });
    });
</script>

<div
    data-aos="fade-up"
    class="container w-[90%] sm:w-full max-w-[470px] h-[200px] sm:h-[211px] rounded-[15px] sm:rounded-[20px] bg-cover bg-center text-white flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_30px_#080A62]"
    style="background-image: url('/Home Page Gradient Product 6.png');"
>
    <div class="w-full flex justify-end items-center mt-[20px] sm:mt-[33px] px-4 sm:px-6">
        <img src="/Lines.png" alt="" class="h-[20px] sm:h-auto" />
        <img src="/Fast.png" alt="" class="h-[20px] sm:h-auto ml-2" />
    </div>

    <div class="px-4 sm:px-6 pb-4 sm:pb-6 text-[14px] sm:text-[18px]">
        <span class="block font-bold mb-2 text-left">Built for Speed</span>
        <div class="text-[12px] sm:text-[16px]">
            Optimized for real-time results. You see what's <br />
            new as it happens, not days later.
        </div>
    </div>
</div>

<style>
    .container {
        transition: 200ms ease !important;
    }
    .container:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0px 0px 30px #080a62;
    }
</style>