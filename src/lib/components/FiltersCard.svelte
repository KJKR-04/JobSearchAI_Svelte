<script>
    import FiltersList from "./FiltersList.svelte";
    import 'aos/dist/aos.css';
    import AOS from 'aos';
    import { onMount } from 'svelte';
  
    onMount(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true, // Whether animation should happen only once
      });
    });
  </script>


<div class="filterscard-container" data-aos="fade-up">
    <div class="image">
        <FiltersList />
        <FiltersList reverse={true} />
    </div>
    <div class="content">
        <span>50+ Smart Filters</span>
        <div>Nail the right job with H1B, stage, salary & more.</div>
    </div>
</div>

<style>

.filterscard-container {
    width: 470px;
    height: 214px;
    border-radius: 20px;
    background: url('/Home Page Gradient Product 3.png');
    letter-spacing: -0.05em;
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: 200ms ease !important;

}

.filterscard-container:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0px 0px 30px #080A62;
}

.filterscard-container .image {
    height: fit-content;
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.filterscard-container .content {
    margin: 30px;
    font-size: 18px;

}

.filterscard-container .content span {
    /* width: 352px; */
    margin-top: 10px;
    text-align: left;
    font-weight: 700;
}

</style>
