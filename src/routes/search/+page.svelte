<script>
  import SearchResult from "$lib/components/SearchResult.svelte";
  import { appStore } from "$lib/stores/appStore";
  import axios from "axios";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  export let searchQuery = $appStore.searchQuery;

  let loading = false;
  let results = [];

  const handleSearch = async () => {
    if (searchQuery.trim() === "") return;

    loading = true;
    results = [];

    appStore.update((state) => ({
      ...state,
      searchQuery,
    }));

    try {
      const res = await axios.post(
        "https://searchapi.mobiusengine.ai/api/search_jobs",
        {
          query: searchQuery,
        },
      );

      results = res.data || [];
      console.log(results);
    } catch (e) {
      console.error("Search failed", e);
    } finally {
      loading = false;
    }
  };


  onMount(()=>{
    handleSearch()
  });

</script>

<div class="flex flex-row justify-start w-full p-5 px-[12%] bg-[#fefefe]">
  <button on:click={()=>goto('/')}>
    <img src="/LogoFull.svg" alt="Logo" />
  </button>
</div>

<div
  class="animate-appear w-[calc(100%-24%)] mx-[12%] flex flex-col items-center justify-evenly gap-16 px-10 py-20 rounded-2xl text-white border bg-cover bg-center bg-no-repeat"
  style="background-image: url('/searchv2.svg'); background-position: 100%; "
>
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
      {loading ? "Searching..." : "Search"}
    </button>
  </div>
</div>

<div
  class="my-[20px] w-[calc(100%-24%)] flex flex-wrap items-center justify-center gap-[20px]"
>
  {#if loading}
    <p class="text-center text-lg text-gray-600 animate-float">
      <img src="/MobiusLogo.png" alt="" />
    </p>
  {:else if results.length === 0}
    <p class="text-center text-lg text-gray-600">No results to display</p>
  {:else}
    {#each results as result}
      <SearchResult data={result} />
    {/each}
  {/if}
</div>


