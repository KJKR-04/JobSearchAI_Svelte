<script>
    import 'aos/dist/aos.css';
    import AOS from 'aos';
    import { onMount } from 'svelte';
    onMount(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once
        });
    });
</script>

<div
    class="container w-[90%] sm:w-[470px] h-[250px] sm:h-[345px] rounded-[15px] sm:rounded-[20px] bg-cover text-white flex flex-col justify-between overflow-hidden transition-all duration-200 ease-in hover:-translate-y-[5px] hover:shadow-[0_0_30px_#080A62]"
    data-aos="fade-up"
    style="background-image: url('/Home Page Gradient Product 4.png');"
>
    <div
        class="image text-[24px] sm:text-[45px] px-4 sm:px-[62px] flex items-center font-light w-full sm:w-[416px] h-[70px] sm:h-[97px] bg-black mt-[20px] sm:mt-[83px] mx-auto rounded-[25px] sm:rounded-[50px_0px_0px_50px]"
    >
        <span class="typing-big">AI ML</span>
        <img src="/Cursor.png" alt="" class="ml-2 w-[20px] sm:w-auto" />
    </div>
    <div class="content m-[20px] sm:m-[30px] text-[14px] sm:text-[18px]">
        <span class="block font-bold text-left mt-[5px] sm:mt-[10px]">
            Finds What You Meant to Say
        </span>
        <div class="text-[12px] sm:text-[16px]">
            No need to keyword-hack. JobSearchAI <br /> understands intent, not just inputs.
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