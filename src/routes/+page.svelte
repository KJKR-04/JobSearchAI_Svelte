<script>
    import { goto } from "$app/navigation";
    import AimlCard from "$lib/components/AIMLCard.svelte";
    import FiltersCard from "$lib/components/FiltersCard.svelte";
    import FreshnessClock from "$lib/components/FreshnessClock.svelte";
    import NoDistractions from "$lib/components/NoDistractions.svelte";
    import ResumeReady from "$lib/components/ResumeReady.svelte";
    import SpeedCard from "$lib/components/SpeedCard.svelte";
    import { appStore } from "$lib/stores/appStore";
    import { writable } from "svelte/store";
    import { onMount } from 'svelte';
    import AOS from "aos";

    onMount(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    });

    let searchQuery = "";

    function handleSearch() {
        appStore.update((state) => ({
            ...state,
            searchQuery,
        }));
        goto("/search");
    }
</script>

<!-- Navbar -->
<div id="navbar" class="flex justify-start w-full px-4 sm:px-6 md:px-10 my-5">
    <img src="/LogoFull.svg" alt="Logo" class="w-[160px] sm:w-[200px]" />
</div>

<!-- Hero Search Section -->
<div
    id="search"
    class="animate-appear w-full max-w-[1800px] flex flex-col items-center justify-evenly gap-10 sm:gap-16 px-4 sm:px-6 md:px-10 py-10 sm:py-20 rounded-2xl text-white border bg-cover bg-center bg-no-repeat"
    style="background-image: url('/search.svg'); background-size: cover;"
>
    <h1 class="text-[36px] sm:text-[50px] md:text-[70px] font-bold text-center max-w-[90%] sm:max-w-[700px] md:max-w-[920px]">
        Your Job Search, Sharpened to Perfection
    </h1>
    <p class="text-center max-w-[90%] sm:max-w-[600px] md:max-w-[800px]">
        No noise. No clutter. Just the roles that fit you — filtered your way, from 30+ precision controls. Welcome to the smartest job search you've ever seen.
    </p>
    <div
    class="flex flex-row flex-nowrap w-full max-w-[95%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] min-h-[70px] bg-black rounded-full overflow-hidden border border-white"
>
    <input
        type="text"
        placeholder="I'm looking for an Entry level Project manager in California"
        id="input-box"
        class="flex-1 bg-black text-white pl-6 py-4 text-sm sm:text-base border-none outline-none min-w-0"
        bind:value={searchQuery}
        on:keydown={(e) => e.key === "Enter" && handleSearch()}
    />
    <button
        class="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold rounded-none rounded-r-full whitespace-nowrap"
        on:click={handleSearch}
    >
        Search
    </button>
</div>

</div>

<!-- JobSearchAI Section -->
<div class="flex flex-col items-center justify-center w-full py-12 sm:py-20 px-4 sm:px-6 md:px-10">
    <h1 class="text-[32px] sm:text-[40px] md:text-[50px] font-semibold text-center">
        Meet <span class="text-[#5C28DF]">JobSearchAI</span>
    </h1>
    <p class="max-w-[90%] sm:max-w-[500px] md:max-w-[630px] font-medium text-center my-6 sm:my-10">
        JobSearchAI is our proprietary semantic search technology built to cut through the noise. It understands what you mean—not just what you type.
    </p>

    <!-- Cards Section -->
    <div class="flex flex-col lg:flex-row gap-6 sm:gap-10 items-center">
        <div class="flex flex-col gap-6 sm:gap-10">
            <AimlCard />
            <FiltersCard />
            <ResumeReady />
        </div>
        <div class="flex flex-col gap-6 sm:gap-10">
            <SpeedCard />
            <NoDistractions />
            <FreshnessClock />
        </div>
    </div>

    <!-- Try Now Button -->
    <a href="#navbar">
        <button
            data-aos="fade-up"
            on:click={() => {
                document.getElementById("input-box").focus();
            }}
            class="rounded-[30px] mt-10 sm:mt-16 text-[18px] sm:text-[22px] md:text-[25px] px-6 sm:px-10 py-3 sm:py-4 font-medium bg-black text-white"
        >
            Try Now
        </button>
    </a>
</div>
