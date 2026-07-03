<script setup lang="ts">
import MaterialIcon from '../common/MaterialIcon.vue'

export type NavItem = {
  label: string
  icon: string
  route: string
}

defineProps<{
  items: NavItem[]
  activeRoute?: string
}>()
</script>

<template>
  <aside class="fixed left-0 top-0 hidden md:flex flex-col w-64 h-full border-r border-outline-variant bg-surface z-50">
    <div class="p-6 flex flex-col h-full">
      <!-- Brand -->
      <div class="mb-10">
        <div class="flex items-center gap-2 mb-1">
          <MaterialIcon name="trending_up" class="text-primary" size="22" />
          <span class="font-headline-md text-headline-md font-bold text-primary">GrowthOS</span>
        </div>
        <p class="text-on-surface-variant text-label-sm w-fit">
          <span class="typing-slogan-sidebar">Grow in every direction.</span>
        </p>
      </div>

      <!-- Nav Items -->
      <nav class="flex-1 space-y-1">
        <a
          v-for="item in items"
          :key="item.route"
          :href="item.route"
          class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200"
          :class="
            activeRoute === item.route
              ? 'text-primary font-bold bg-primary-container/10 border-r-4 border-primary'
              : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
          "
        >
          <MaterialIcon
            :name="item.icon"
            :fill="activeRoute === item.route"
            :wght="activeRoute === item.route ? 500 : 400"
          />
          <span class="font-body-md">{{ item.label }}</span>
        </a>
      </nav>

      <!-- Bottom Actions -->
      <div class="mt-auto space-y-4 pt-6 border-t border-outline-variant">
        <button class="w-full bg-primary text-on-primary py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_2px_0_rgba(0,0,0,0.1)] hover:opacity-90 active:scale-[0.98] transition-all">
          <MaterialIcon name="add" />
          <span>Add Idea</span>
        </button>
        <div class="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-on-surface cursor-pointer rounded-lg transition-colors">
          <MaterialIcon name="settings" />
          <span class="font-label-md">Settings</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.typing-slogan-sidebar {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  border-right: 1.5px solid var(--color-primary);
  background: linear-gradient(90deg, #4648d4, #6063ee, #6cf8bb, #ffb95f, #e8585a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: typewriter-sidebar 8s ease-in-out infinite, blink-caret-sidebar 0.7s step-end infinite;
}

@keyframes typewriter-sidebar {
  0%, 5%   { width: 0; }
  35%      { width: 100%; }
  65%      { width: 100%; }
  90%, 100% { width: 0; }
}

@keyframes blink-caret-sidebar {
  0%, 100% { border-right-color: transparent; }
  50%      { border-right-color: var(--color-primary); }
}
</style>
