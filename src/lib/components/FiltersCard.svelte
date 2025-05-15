<script>
    import FiltersList from "./FiltersList.svelte";
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
    class="filterscard-container w-[90%] sm:w-[470px] h-[200px] sm:h-[214px] rounded-[15px] sm:rounded-[20px] bg-cover text-white overflow-hidden flex flex-col transition-all duration-200 ease-in hover:-translate-y-[5px] hover:shadow-[0_0_30px_#080A62]"
    data-aos="fade-up"
    style="background-image: url('/Home Page Gradient Product 3.png');"
>
    <div class="image mt-[10px] sm:mt-[14px] flex flex-col gap-[8px] sm:gap-[10px]">
        <FiltersList />
        <FiltersList reverse={true} />
    </div>
    <div class="content m-[20px] sm:m-[30px] text-[14px] sm:text-[18px]">
        <span class="block mt-[5px] sm:mt-[10px] text-left font-bold">
            50+ Smart Filters
        </span>
        <div class="text-[12px] sm:text-[16px]">
            Nail the right job with H1B, stage, salary & more.
        </div>
    </div>
</div>

<style>
    .filterscard-container {
        transition: 200ms ease !important;
    }

    .filterscard-container:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0px 0px 30px #080A62;
    }

    .filterscard-container .image {
        height: fit-content;
    }
</style>