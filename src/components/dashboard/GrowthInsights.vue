<script setup lang="ts">
import MaterialIcon from '../common/MaterialIcon.vue'
</script>

<template>
  <section class="space-y-4">
    <h2 class="font-headline-md text-headline-md flex items-center gap-2 px-2">
      <MaterialIcon name="monitoring" class="text-primary" />
      Growth Insights
    </h2>

    <div class="bg-white rounded-5 border border-outline-variant card-shadow overflow-hidden border-l-4 border-l-primary">
      <div class="p-6 border-b border-outline-variant">
        <p class="text-xs font-bold uppercase tracking-widest text-primary mb-2">Recent Reflection</p>
        <p class="text-sm font-medium italic text-on-surface leading-relaxed">
          &ldquo;The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.&rdquo; —— Continuously iterate your expression through feedback.
        </p>
      </div>
      <div class="p-4 grid grid-cols-2 gap-4">
        <div class="bg-secondary-container/10 p-3 rounded-2xl border border-secondary-container/30">
          <p class="text-[10px] font-bold text-secondary-container">Excellent Performance</p>
          <p class="text-xs font-bold">Engagement +40%</p>
        </div>
        <div class="bg-error-container/10 p-3 rounded-2xl border border-error-container/30">
          <p class="text-[10px] font-bold text-error">Needs Rewrite</p>
          <p class="text-xs font-bold">Conversion below expectation</p>
        </div>
      </div>
    </div>
  </section>
</template>
