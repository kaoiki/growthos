<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MaterialIcon from '../common/MaterialIcon.vue'

export type TabItem = {
  label: string
  icon: string
  route: string
}

const props = defineProps<{
  tabs: TabItem[]
}>()

const route = useRoute()

const activeRoute = computed(() => route.path)
</script>

<template>
  <nav class="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant flex md:hidden h-16 z-50">
    <!-- Left 3 tabs -->
    <div class="flex-1 flex justify-around items-center h-full">
      <router-link
        v-for="item in tabs.slice(0, 3)"
        :key="item.route"
        :to="item.route"
        class="flex flex-col items-center justify-center gap-0.5 h-full px-2"
        :class="activeRoute === item.route ? 'text-primary' : 'text-on-surface-variant'"
      >
        <MaterialIcon
          :name="item.icon"
          size="22"
          :fill="activeRoute === item.route"
        />
        <span
          class="text-[10px] leading-tight"
          :class="activeRoute === item.route ? 'font-bold' : ''"
        >
          {{ item.label }}
        </span>
      </router-link>
    </div>

    <!-- Center FAB -->
    <div class="w-16 flex items-start justify-center relative">
      <button class="w-11 h-11 -mt-5 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform">
        <MaterialIcon name="add" size="22" />
      </button>
    </div>

    <!-- Right 3 tabs -->
    <div class="flex-1 flex justify-around items-center h-full">
      <router-link
        v-for="item in tabs.slice(3, 6)"
        :key="item.route"
        :to="item.route"
        class="flex flex-col items-center justify-center gap-0.5 h-full px-2"
        :class="activeRoute === item.route ? 'text-primary' : 'text-on-surface-variant'"
      >
        <MaterialIcon
          :name="item.icon"
          size="22"
          :fill="activeRoute === item.route"
        />
        <span
          class="text-[10px] leading-tight"
          :class="activeRoute === item.route ? 'font-bold' : ''"
        >
          {{ item.label }}
        </span>
      </router-link>
    </div>
  </nav>
</template>
