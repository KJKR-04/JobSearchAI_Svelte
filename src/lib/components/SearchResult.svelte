<script>
    import AOS from "aos";
    import "aos/dist/aos.css";

    import { onMount } from "svelte";

    export let data = {};
    const jobType = data.is_full_time
        ? "Full-time"
        : data.is_contract
          ? "Contract"
          : data.is_part_time
            ? "Part-time"
            : "N/A";
    const locationtype = data.is_remote
        ? "Remote"
        : data.data_location_city != null
          ? data.data_location_city
          : data.data_location_state != null
            ? data.data_location_country
            : "N/A";
    const seniority = data.is_executive
        ? "Executive"
        : data.is_director_level
          ? "Director"
          : data.is_senior_level
            ? "Senior"
            : data.is_entry_level
              ? "Entry"
              : data.is_internship
                ? "Intern"
                : "N/A";
    const maxsalary = data.max_salary ? `${data.max_salary}` : "Undisclosed";
</script>

<div
    class="hover-effect flex flex-col gap-5 p-4 max-w-[350px] min-h-[150px] max-h-[180px] w-full bg-[#e9e9e9] rounded-[10px] justify-between"
>
    <!-- Row 1 -->
    <div class="flex justify-between items-center">
        <div class="flex flex-col">
            <h1
                class="truncate max-w-[150px] text-[16px] text-[#373ac2] font-medium"
            >
                {data.data_job_title}
            </h1>
            <h2 class="truncate max-w-[150px] text-[14px] text-[#414141]">
                {data.data_company}
            </h2>
        </div>
        <a target="blank" href={data.data_external_application_link}>
            <button
                class="bg-[#373ac2] text-white text-[14px] py-[5px] px-[15px] rounded-full font-medium whitespace-nowrap"
            >
                Apply Now
            </button>
        </a>
    </div>

    <!-- Row 2 -->
    <div class="flex justify-between text-[10px]">
        <span class="flex items-center gap-[5px]">
            <img class="w-[10px]" src="/location.svg" alt="Location icon" />
            {data.data_location_city +
                " " +
                (data.data_location_state
                    ? " , " + data.data_location_state
                    : "")}
        </span>
        <span class="flex items-center gap-[5px]">
            <img class="w-[10px]" src="/salary.svg" alt="Salary icon" />
            {maxsalary}
        </span>
        <span class="flex items-center gap-[5px]">
            <img class="w-[10px]" src="/type.svg" alt="Type icon" />
            {jobType}
        </span>
    </div>
</div>

<style>
    .hover-effect {
        transition: 200ms ease;
    }
    .hover-effect:hover {
        transform: translateY(-5px);
        box-shadow: 0px 0px 5px blue;
    }
    @scroll-timeline fadeInTimeline {
        source: auto;
        orientation: block;
        scroll-offsets:
            start 0%,
            end 100%;
    }

    .scroll-fade-in {
        animation-name: fadeIn;
        animation-timeline: fadeInTimeline;
        animation-duration: 1s;
        animation-fill-mode: both;
    }
</style>
