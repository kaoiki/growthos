<script setup lang="ts">
import MaterialIcon from '../common/MaterialIcon.vue'
</script>

<template>
  <section class="space-y-4">
    <h2 class="font-headline-md text-headline-md flex items-center gap-2 px-2">
      <MaterialIcon name="calendar_month" class="text-primary" />
      Distribution Plan
    </h2>

    <div class="bg-white rounded-5 border border-outline-variant card-shadow p-6 space-y-4 border-l-4 border-l-secondary">
      <!-- Twitter -->
      <div class="flex items-center gap-4 group cursor-pointer">
        <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary transition-colors">
          <MaterialIcon name="1k" />
        </div>
        <div class="flex-1">
          <p class="text-sm font-bold">Twitter (X)</p>
          <p class="text-xs text-on-surface-variant">Today 18:00 · Thread Distribution</p>
        </div>
        <MaterialIcon name="edit" size="18" class="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <!-- LinkedIn -->
      <div class="flex items-center gap-4 group cursor-pointer">
        <div class="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-[#0077B5] group-hover:text-white transition-colors">
          <MaterialIcon name="share" />
        </div>
        <div class="flex-1">
          <p class="text-sm font-bold">LinkedIn</p>
          <p class="text-xs text-on-surface-variant">Tomorrow 09:30 · Article Summary</p>
        </div>
        <MaterialIcon name="edit" size="18" class="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  </section>
</template>
