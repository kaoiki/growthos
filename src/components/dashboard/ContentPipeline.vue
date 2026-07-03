<script setup lang="ts">
import MaterialIcon from '../common/MaterialIcon.vue'

const pipelines = [
  {
    title: '2024 Creator Economy Forecast Report',
    status: 'Drafting',
    statusStyle: 'primary',
    tags: ['Article', 'Long-form'],
    progress: 65,
    hasAI: true,
  },
  {
    title: 'How to Save 20h/Week via Automation',
    status: 'Ready',
    statusStyle: 'secondary',
    tags: ['Thread', 'Twitter'],
    progress: 100,
    hasAI: false,
    canPublish: true,
  },
  {
    title: 'Personal Brand Visual Upgrade Guide',
    status: 'Backlog',
    statusStyle: 'dim',
    tags: ['Script', 'Video'],
    progress: 0,
    hasAI: false,
    dimmed: true,
  },
]
</script>

<template>
  <section class="space-y-4">
    <div class="flex justify-between items-center px-2">
      <h2 class="font-headline-md text-headline-md flex items-center gap-2">
        <MaterialIcon name="reorder" class="text-primary" />
        Content Pipeline
      </h2>
    </div>

    <div class="space-y-4">
      <!-- Drafting -->
      <div class="bg-white p-5 rounded-5 border border-outline-variant card-shadow space-y-4 border-l-4 border-l-primary">
        <div class="flex justify-between items-center">
          <span class="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary-container/10 rounded">Drafting</span>
          <MaterialIcon name="more_vert" size="18" class="text-on-surface-variant" />
        </div>
        <h4 class="font-bold">2024 Creator Economy Forecast Report</h4>
        <div class="flex gap-2">
          <span class="text-[11px] bg-surface-container text-on-surface-variant px-2 py-0.5 rounded">Article</span>
          <span class="text-[11px] bg-surface-container text-on-surface-variant px-2 py-0.5 rounded">Long-form</span>
        </div>
        <div class="w-full bg-surface-container-low h-1.5 rounded-full overflow-hidden">
          <div class="bg-primary h-full w-[65%] rounded-full"></div>
        </div>
        <div class="flex justify-between items-center text-xs text-on-surface-variant">
          <span>Progress: 65%</span>
          <div class="flex -space-x-2">
            <div class="w-6 h-6 rounded-full border-2 border-white bg-tertiary-container text-[8px] flex items-center justify-center text-white">AI</div>
          </div>
        </div>
      </div>

      <!-- Ready -->
      <div class="bg-white p-5 rounded-5 border border-outline-variant card-shadow space-y-4 border-l-4 border-l-secondary">
        <div class="flex justify-between items-center">
          <span class="text-[10px] font-bold text-secondary px-2 py-0.5 bg-secondary-container/20 rounded">Ready</span>
          <MaterialIcon name="check_circle" size="18" class="text-on-surface-variant" />
        </div>
        <h4 class="font-bold">How to Save 20h/Week via Automation</h4>
        <div class="flex gap-2">
          <span class="text-[11px] bg-surface-container text-on-surface-variant px-2 py-0.5 rounded">Thread</span>
          <span class="text-[11px] bg-surface-container text-on-surface-variant px-2 py-0.5 rounded">Twitter</span>
        </div>
        <button class="w-full py-2 bg-on-secondary-container text-white rounded-xl text-sm font-bold shadow-md active:scale-95 transition-all">
          Publish Now
        </button>
      </div>

      <!-- Backlog -->
      <div class="bg-white p-5 rounded-5 border border-outline-variant card-shadow space-y-4 opacity-75 grayscale-[0.5]">
        <div class="flex justify-between items-center">
          <span class="text-[10px] font-bold text-on-surface-variant px-2 py-0.5 bg-surface-container rounded">Backlog</span>
        </div>
        <h4 class="font-bold text-on-surface-variant">Personal Brand Visual Upgrade Guide</h4>
        <div class="flex gap-2">
          <span class="text-[11px] bg-surface-container text-on-surface-variant px-2 py-0.5 rounded">Script</span>
          <span class="text-[11px] bg-surface-container text-on-surface-variant px-2 py-0.5 rounded">Video</span>
        </div>
      </div>
    </div>
  </section>
</template>
