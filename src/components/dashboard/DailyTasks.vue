<script setup lang="ts">
import MaterialIcon from '../common/MaterialIcon.vue'
</script>

<template>
  <div class="bg-surface-container-highest rounded-5 p-8 card-shadow flex flex-col justify-center gap-4">
    <div class="flex justify-between items-center">
      <span class="font-headline-md text-headline-md">Daily Tasks</span>
      <MaterialIcon name="auto_awesome" class="text-primary" />
    </div>
    <div class="space-y-3">
      <div class="flex items-center gap-3 bg-white p-3 rounded-xl border border-outline-variant">
        <div class="w-2 h-2 bg-secondary rounded-full"></div>
        <span class="text-sm">Distribute X (Twitter) thread</span>
      </div>
      <div class="flex items-center gap-3 bg-white p-3 rounded-xl border border-outline-variant">
        <div class="w-2 h-2 bg-primary rounded-full"></div>
        <span class="text-sm">Reflect on last week's LinkedIn performance</span>
      </div>
      <div class="flex items-center gap-3 bg-white p-3 rounded-xl border border-outline-variant opacity-60 line-through">
        <div class="w-2 h-2 bg-outline rounded-full"></div>
        <span class="text-sm">Update Notion knowledge base</span>
      </div>
    </div>
  </div>
</template>
