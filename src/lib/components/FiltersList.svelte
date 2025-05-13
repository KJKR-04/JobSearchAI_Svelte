<script>
    export let reverse = false;
  
    const arr = [
      "Contract", "Startup", "Engineering", "Mid Salary",
      "Hybrid", "Internship", "Part Time", "Executive",
      "Managerial", "Chicago Area"
    ];
  </script>
  
  <div class={`overflow-hidden w-full ${reverse ? 'reverse' : 'forward'}`}>
    <div class="flex whitespace-nowrap filterslist-container">
      {#each arr as item (item)}
        <div class="inline-block text-[white] px-4 py-2 mr-4 bg-black rounded-full text-sm text-black">
          {item}
        </div>
      {/each}
  
      <!-- Duplicate for smooth loop -->
      {#each arr as item (item + '-dup')}
        <div class="inline-block text-[white] px-4 py-2 mr-4 bg-black rounded-full text-sm text-black">
          {item}
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .filterslist-container {
      animation: scroll 20s linear infinite;
    }
  
    .forward .filterslist-container {
      animation-direction: normal;
    }
  
    .reverse .filterslist-container {
      animation-direction: reverse;
    }
  
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  </style>
  