<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import MaterialIcon from '../components/common/MaterialIcon.vue'

const route = useRoute()
const pageName = computed(() => {
  const map: Record<string, string> = {
    inbox: 'Idea Inbox',
    pipeline: 'Content Pipeline',
    plan: 'Distribution Plan',
    insights: 'Growth Insights',
    profile: 'Profile',
  }
  return map[route.name as string] || 'Page'
})
</script>

<template>
  <DefaultLayout>
    <div class="flex flex-col items-center justify-center py-20 text-center">
      <MaterialIcon name="construction" size="48" class="text-outline mb-4" />
      <h1 class="font-headline-md text-headline-md text-on-surface mb-2">{{ pageName }}</h1>
      <p class="text-on-surface-variant">Coming soon — this page is under development.</p>
    </div>
  </DefaultLayout>
</template>
