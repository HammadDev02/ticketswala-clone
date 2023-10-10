<template>
  <footer class="fixed bottom-0 left-0 w-full z-50">
    <div class="bg-[#262b3c] w-full lg:w-10/12 ml-[230px] overflow-hidden px-6 py-2 sm:py-4 lg:px-8">
      <div class="sm:flex justify-between gap-x-2 items-center max-sm:text-center">
        <!-- <span class="sm:text-xl font-bold tracking-wide text-gray-500">2023 © Ticket Wala.</span> -->
        <p class="mt-1 text-center text-xs leading-5 text-[#686f91] font-semibold">{{ currentYear.getFullYear() }} &copy; Ticket Wala.
          <!-- <span class="font-bold">TalentMatch</span>, Inc. All rights reserved. -->
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date,
    }
  },
}
</script>
<style></style>