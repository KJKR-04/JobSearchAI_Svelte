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
  class="container w-[90%] sm:w-[470px] h-[200px] sm:h-[230px] gap-4 sm:gap-5 p-[20px] sm:p-[30px] rounded-[15px] sm:rounded-[20px] bg-cover flex flex-col justify-between text-white"
  style="background-image: url('/Home Page Gradient Product 3.png');"
>
  <div class="flex items-center justify-center h-full">
    <button
      class="text-[16px] sm:text-[18px] font-normal bg-black text-white border-none max-w-[140px] sm:max-w-[160px] w-full h-[50px] sm:h-[60px] rounded-full"
    >
      Apply Now ↗
    </button>
  </div>

  <div class="flex flex-col justify-center text-[14px] sm:text-[18px] tracking-[-0.05em]">
    <b class="text-[16px] sm:text-[20px]">Direct Apply Only</b>
    <p class="mt-0 text-[12px] sm:text-[16px]">One click. No middlemen. Straight to apply.</p>
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