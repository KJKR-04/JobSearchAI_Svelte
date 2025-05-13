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
  class="container w-[470px] h-[345px] rounded-[20px] text-white flex flex-col transition-all duration-200 ease-in hover:-translate-y-[5px] hover:shadow-[0_0_30px_#080A62]"
  style="background-image: url('/Home Page Gradient Product 4.png'); background-size: cover;"
>
  <div class="mt-[25px] ml-[50px]">
    <img src="/target.png" alt="target" />
  </div>

  <div class="m-[30px] text-[18px]">
    <span class="block font-bold text-left mt-[10px] w-[352px]">
      No Sponsored Junk
    </span>
    <div>No ads. No pay-to-play listings. Ever.</div>
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
