<script setup lang="ts">
import MaterialIcon from '../common/MaterialIcon.vue'
</script>

<template>
  <section class="lg:col-span-2 relative overflow-hidden rounded-5 bg-primary-container text-on-primary-container p-8 card-shadow flex flex-col justify-between min-h-[220px]">
    <div class="relative z-10">
      <div class="flex items-center gap-2 mb-2">
        <span class="bg-white/20 px-3 py-1 rounded-full text-label-sm">Active Loop: Web3 Strategy</span>
        <span class="text-label-sm opacity-80">12th Iteration</span>
      </div>
      <h1 class="font-headline-lg text-headline-lg mb-4">
        &ldquo;The best time to plant a tree was 20 years ago. The second best time is now.&rdquo;
      </h1>
    </div>
    <div class="relative z-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
      <div>
        <p class="text-label-sm opacity-80">Avg. Engagement</p>
        <p class="font-headline-md text-headline-md">8.4% <span class="text-sm font-normal">↑ 12%</span></p>
      </div>
      <div>
        <p class="text-label-sm opacity-80">Total Reach</p>
        <p class="font-headline-md text-headline-md">142.5k</p>
      </div>
      <div>
        <p class="text-label-sm opacity-80">Reflection Score</p>
        <p class="font-headline-md text-headline-md">92/100</p>
      </div>
    </div>
  </section>
</template>
