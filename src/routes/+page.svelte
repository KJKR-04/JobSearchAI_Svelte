<script>
    import { goto } from "$app/navigation";
    import AimlCard from "$lib/components/AIMLCard.svelte";
    import { appStore } from "$lib/stores/appStore";
    import { writable } from "svelte/store";

    let searchQuery = "";

    function handleSearch() {
        appStore.update((state) => ({
            ...state,
            searchQuery,
        }));
        goto("/search");
    }
</script>

<div class="flex-row justify-left w-full px-10 m-5">
    <img src="/LogoFull.svg" alt="" />
</div>

<div
    class="animate-appear w-full max-w-[1800px] flex flex-col items-center justify-evenly gap-16 mx-4 px-10 py-20 rounded-2xl text-white border bg-cover bg-center bg-no-repeat"
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
            placeholder="Enter text"
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
    <h1 class="text-[50px] font-[500] " >  Meet <span class="text-[#5C28DF]" >JobSearchAI</span> </h1>
    <p class="max-w-[630px] text-center m-[50px]">
        JobSearchAI is our proprietary semantic search technology built to cut through the noise. It understands what you mean—not just what you type.
    </p>
    <AimlCard />
    
</div>
