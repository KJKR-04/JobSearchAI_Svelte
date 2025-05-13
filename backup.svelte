<script>
    import { Search, Zap, Filter, Clock, BarChart2 } from 'lucide-svelte';
    import { goto } from '$app/navigation';
  
    export let searchQuery = '';
    let isSearching = false;
  
    function handleSearch() {
      if (searchQuery.trim()) {
        isSearching = true;
        setTimeout(() => {
          goto(`/search?q=${encodeURIComponent(searchQuery)}`);
        }, 500);
      }
    }
  </script>
  
  <div class="min-h-screen bg-white text-gray-900">
    <!-- Hero Section -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-24">
      <!-- Background Gradient -->
      <div class="absolute inset-x-0 top-0 transform origin-top bg-gray-50 -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      
      <!-- Main Content -->
      <div class="relative">
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-center">
          Your Job Search, <br/>
          <span class="text-indigo-600">Sharpened to Perfection</span>
        </h1>
        
        <p class="mt-6 text-xl text-center text-gray-600 max-w-3xl mx-auto">
          Tired of Wasting Hours on LinkedIn? We built the job search engine they should have.
          No noise. No spam. Just the right jobs, instantly.
        </p>
        
        <!-- Search Bar -->
        <div class="mt-10 max-w-2xl mx-auto">
          <div class="flex shadow-lg rounded-full overflow-hidden">
            <input 
              type="text" 
              bind:value={searchQuery}
              placeholder="I am looking for an entry level product manager job in California..."
              class="flex-grow px-6 py-4 text-lg outline-none w-full"
              on:keydown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button 
              on:click={handleSearch}
              class="bg-indigo-600 text-white px-8 py-4 text-lg hover:bg-indigo-700 transition flex items-center"
            >
              <Search class="mr-2" /> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Features Section -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Patent Pending
          </h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            JobSearchAI is our proprietary semantic search technology
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Built to cut through the noise. It understands what you mean—not just what you type.
          </p>
        </div>
  
        <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-indigo-100 rounded-full">
                <Zap class="w-8 h-8 text-indigo-600" />
              </div>
            </div>
            <h3 class="text-lg font-bold text-gray-900">AI ML</h3>
            <p class="mt-2 text-base text-gray-500">
              Finds What You Meant to Say. No need to keyword-hack. JobSearchAI understands intent, not just inputs.
            </p>
          </div>
  
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-green-100 rounded-full">
                <Filter class="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h3 class="text-lg font-bold text-gray-900">50+ Smart Filters</h3>
            <p class="mt-2 text-base text-gray-500">
              Nail the right job with H1B, stage, salary & more.
            </p>
          </div>
  
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <div class="p-4 bg-yellow-100 rounded-full">
                <Clock class="w-8 h-8 text-yellow-600" />
              </div>
            </div>
            <h3 class="text-lg font-bold text-gray-900">Built for Speed</h3>
            <p class="mt-2 text-base text-gray-500">
              Optimized for real-time results. You see what's new as it happens, not days later.
            </p>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Additional Features -->
    <div class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">
            Apply Now ↗
          </h2>
          <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
              <div class="flex items-center mb-4">
                <BarChart2 class="w-8 h-8 text-indigo-600 mr-3" />
                <h3 class="text-xl font-bold">Direct Apply Only</h3>
              </div>
              <p class="text-gray-600">
                One click. No middlemen. Straight to apply.
              </p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
              <div class="flex items-center mb-4">
                <Clock class="w-8 h-8 text-green-600 mr-3" />
                <h3 class="text-xl font-bold">Only Fresh Jobs</h3>
              </div>
              <p class="text-gray-600">
                Posted within 7 days—or gone. Search from companies actually hiring—not just posting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- FAQ Section -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div class="max-w-3xl mx-auto">
          <p class="text-gray-600 mb-4">
            Need help with something? Here are some of the most common questions we get.
          </p>
          <ul class="space-y-4">
            {#each [
              'What is JobSearchAI?',
              'How is JobSearchAI different from LinkedIn and other job boards?',
              'Is JobSearchAI free to use?',
              'How fresh are the jobs on JobSearchAI?',
              'Do you show paid or promoted jobs?',
              'Can I apply directly through JobSearchAI?',
              'Can I filter for H1B, startup stage, or remote roles?',
              'Where do your jobs come from?',
              'What if I can\'t find the role I want?'
            ] as question}
              <li class="border-b pb-4">
                <h3 class="font-semibold text-gray-800">{question}</h3>
              </li>
            {/each}
          </ul>
          <p class="mt-8 text-center text-gray-600">
            Still have questions? Email us at support@mobiusengine.com
          </p>
        </div>
      </div>
    </div>
  
    <!-- Footer -->
    <footer class="bg-white border-t">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-gray-500">
          Copyright © 2025 Mobius Engine. All Rights Reserved.
        </p>
      </div>
    </footer>
  
    <!-- Search Transition Overlay -->
    {#if isSearching}
      <div 
        class="fixed inset-0 z-50 bg-gradient-to-br from-indigo-600 to-purple-700 
               flex items-center justify-center"
        transition:fade
      >
        <div 
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 bg-white text-indigo-600 rounded-full w-24 h-24 
                 flex items-center justify-center animate-ping"
        >
          <Search class="w-12 h-12" />
        </div>
      </div>
    {/if}
  </div>