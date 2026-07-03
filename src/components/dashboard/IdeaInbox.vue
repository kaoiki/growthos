<script setup lang="ts">
import MaterialIcon from '../common/MaterialIcon.vue'

const ideas = [
  {
    title: '10 Myths About AI Collaboration',
    description: '"Genius is nothing but making effort in the right place." —— Recording every moment of inspiration.',
    time: '2h ago',
    status: 'Captured',
  },
  {
    title: 'The Scalability Paradox of Solopreneurs',
    description: '"Daily progress, however small, eventually yields results." —— Exploring the compound effect of long-termism.',
    time: 'Yesterday',
    status: 'Captured',
  },
  {
    title: 'Psychological Hints of Minimalist Design',
    description: 'How is authority created through whitespace in modern UI design?',
    time: '3d ago',
    status: 'Captured',
  },
]
</script>

<template>
  <section class="space-y-4">
    <div class="flex justify-between items-center px-2">
      <h2 class="font-headline-md text-headline-md flex items-center gap-2">
        <MaterialIcon name="inventory_2" class="text-primary" />
        Idea Inbox
      </h2>
      <button class="text-primary hover:bg-primary-container/5 p-1 rounded-md transition-colors">
        <MaterialIcon name="more_horiz" />
      </button>
    </div>

    <div class="bg-white rounded-5 border border-outline-variant card-shadow overflow-hidden border-l-4 border-l-tertiary">
      <div class="p-2 space-y-1">
        <div
          v-for="(idea, idx) in ideas"
          :key="idx"
          class="p-4 hover:bg-surface-container-low rounded-2xl transition-colors cursor-pointer group"
        >
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-bold text-on-surface">{{ idea.title }}</h3>
            <span class="text-[10px] text-on-surface-variant uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded">{{ idea.time }}</span>
          </div>
          <p class="text-sm text-on-surface-variant line-clamp-2 mb-4">{{ idea.description }}</p>
          <div class="flex justify-between items-center">
            <span class="bg-secondary-container text-on-secondary-container text-[11px] px-2 py-0.5 rounded-full font-bold">{{ idea.status }}</span>
            <button class="text-primary text-label-md font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Build <MaterialIcon name="arrow_forward" size="14" />
            </button>
          </div>
        </div>
      </div>

      <button class="w-full py-4 bg-surface-container-low text-primary font-bold text-sm hover:bg-surface-container-high transition-colors">
        View all ideas (24)
      </button>
    </div>
  </section>
</template>
