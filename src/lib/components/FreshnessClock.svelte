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
  class="container flex flex-col justify-between overflow-hidden text-white max-w-[470px] w-[90%] sm:w-[470px] h-[200px] sm:h-[230px] p-[20px] sm:p-[25px] rounded-[15px] sm:rounded-[20px] bg-cover transition-all duration-200 ease-in hover:-translate-y-[5px] hover:shadow-[0_0_30px_#080A62]"
  style="background-image: url('/Home Page Gradient Product 6.png');"
>
  <div class="flex justify-end items-center">
    <img src="/Clock.png" alt="clock" class="w-[30px] sm:w-[40px]" />
  </div>

  <div class="flex flex-col justify-center text-[16px] sm:text-[18px] tracking-[-0.05em]">
    <b class="text-[18px] sm:text-[20px]">Only Fresh Jobs</b>
    <p class="m-0 text-[14px] sm:text-[16px]">Posted within 7 days—or gone.</p>
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