<script>
  import "aos/dist/aos.css";
  import AOS from "aos";
  import { onMount } from 'svelte';

  onMount(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  });
</script>

<div
  data-aos="fade-up"
  class="container w-[90%] sm:w-[470px] h-[250px] sm:h-[345px] rounded-[15px] sm:rounded-[20px] text-white flex flex-col transition-all duration-200 ease-in hover:-translate-y-[5px] hover:shadow-[0_0_30px_#080A62]"
  style="background-image: url('/Home Page Gradient Product 4.png'); background-size: cover;"
>
  <div class="mt-[15px] sm:mt-[25px] ml-[20px] sm:ml-[50px]">
    <img src="/target.png" alt="target" class="w-[40px] sm:w-[60px]" />
  </div>

  <div class="m-[20px] sm:m-[30px] text-[14px] sm:text-[18px]">
    <span class="block font-bold text-left mt-[5px] sm:mt-[10px] w-[90%] sm:w-[352px]">
      No Sponsored Junk
    </span>
    <div class="text-[12px] sm:text-[16px]">No ads. No pay-to-play listings. Ever.</div>
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