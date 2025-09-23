<script lang="ts">
    import { RichmondSkyline } from "$lib";
    import { RN } from "$lib";
</script>

<div class="relative w-full h-[70vh] overflow-hidden flex flex-col justify-center items-center text-center">
    <!-- Parallax Image -->
    <img src={RichmondSkyline} alt="" class="fixed top-0 left-0 w-full h-full object-cover object-center -z-10" />

    <h1 class="text-white text-4xl font-bold font-poppins drop-shadow-[0_1px_5px_yellow] mb-4">
        Welcome to Anee's Care
    </h1>
    
    <p class="text-white text-lg md:text-xl font-varela drop-shadow-[0_1px_5px_yellow] flex items-center justify-center gap-2">
        Your Trusted Nursing Professional Located in Richmond, Virginia
        <img src={RN} alt="RN" class="h-16 invert mr-1">
    </p>
</div>
