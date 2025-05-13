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
  id="container"
  class="container flex flex-col justify-between text-white max-w-[470px] w-full h-[230px] gap-5 p-[30px] rounded-[20px] bg-cover"
  style="background-image: url('/Home Page Gradient Product 3.png');"
>
  <div class="flex items-center justify-center h-full">
    <button
      class="text-[18px] font-normal bg-black text-white border-none max-w-[160px] w-full h-[60px] rounded-full"
    >
      Apply Now ↗
    </button>
  </div>

  <div class="flex flex-col justify-center text-[18px] tracking-[-0.05em]">
    <b class="text-[20px]">Direct Apply Only</b>
    <p class="mt-0">One click. No middlemen. Straight to apply.</p>
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
