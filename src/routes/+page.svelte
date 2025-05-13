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
    import  AOS  from "aos";

    onMount(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once
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

<div id="navbar" class="flex-row justify-left w-full px-10 m-5">
    <img src="/LogoFull.svg" alt="" />
</div>

<div
    id="search"
    class="animate-appear w-full max-w-[1800px] flex flex-col items-center justify-evenly gap-16 px-10 py-20 rounded-2xl text-white border bg-cover bg-center bg-no-repeat"
    style="background-image: url('/search.svg'); background-size: cover;"
>
    <h1 class="text-[70px] max-w-[920px] font-bold text-center">
        Your Job Search, Sharpened to Perfection
    </h1>
    <p class="max-w-[800px] text-center">
        No noise. No clutter. Just the roles that fit you — filtered your way,
        from 30+ precision controls. Welcome to the smartest job search you've
        ever seen.
    </p>
    <div
        class="flex w-full max-w-[1200px] min-h-[70px] bg-black rounded-full overflow-hidden border border-white"
    >
        <input
            type="text"
            placeholder="I'm looking for an Entry level Project manager in California"
            id="input-box"
            class="flex-1 bg-black text-white pl-8 border-none outline-none"
            bind:value={searchQuery}
            on:keydown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
            class="min-w-[200px] bg-white text-black rounded-full"
            on:click={handleSearch}
        >
            Search
        </button>
    </div>
</div>
<div
    class="flex flex-col items-center justify-center w-[100%] py-[100px] px-10 border p-y-[10px]"
>
    <h1 class="text-[50px] font-[600]">
        Meet <span class="text-[#5C28DF]">JobSearchAI</span>
    </h1>
    <p class="max-w-[630px] font-[600] text-center m-[50px]">
        JobSearchAI is our proprietary semantic search technology built to cut
        through the noise. It understands what you mean—not just what you type.
    </p>
    <div class="flex gap-[20px]">
        <div class="flex flex-col gap-[20px]">
            <AimlCard />
            <FiltersCard />
            <ResumeReady />
        </div>
        <div class="flex flex-col gap-[20px]">
            <SpeedCard />
            <NoDistractions />
            <FreshnessClock />
        </div>
    </div>
    <a href="#navbar">
        <button
        data-aos="fade-up"
        on:click={()=>{
            document.getElementById("input-box").focus()
        }}
            class=" rounded-[35px] my-[50px] text-[25px] px-[20px] py-[10px] font-[500] bg-[black] text-[white]"
        >
            Try Now
        </button>
    </a>
</div>
