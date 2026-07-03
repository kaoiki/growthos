<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from '../components/layout/Sidebar.vue'
import TopNavbar from '../components/layout/TopNavbar.vue'
import MobileBottomNav from '../components/layout/MobileBottomNav.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import type { NavItem } from '../components/layout/Sidebar.vue'
import type { TabItem } from '../components/layout/MobileBottomNav.vue'

const route = useRoute()
const activeRoute = computed(() => route.path)

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard', route: '/' },
  { label: 'Idea Inbox', icon: 'inventory_2', route: '/inbox' },
  { label: 'Content Pipeline', icon: 'reorder', route: '/pipeline' },
  { label: 'Distribution Plan', icon: 'calendar_month', route: '/plan' },
  { label: 'Growth Insights', icon: 'monitoring', route: '/insights' },
]

const mobileTabs: TabItem[] = [
  { label: 'Dashboard', icon: 'dashboard', route: '/' },
  { label: 'Inbox', icon: 'inventory_2', route: '/inbox' },
  { label: 'Pipeline', icon: 'reorder', route: '/pipeline' },
  { label: 'Plan', icon: 'calendar_month', route: '/plan' },
  { label: 'Insights', icon: 'monitoring', route: '/insights' },
  { label: 'Profile', icon: 'person', route: '/profile' },
]
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Sidebar (desktop) -->
    <Sidebar :items="navItems" :active-route="activeRoute" />

    <!-- Fixed TopNavbar (position only, glass is on TopNavbar itself) -->
    <div class="fixed top-0 left-0 md:left-64 right-0 z-40">
      <TopNavbar />
    </div>

    <!-- Scrollable content -->
    <main class="md:ml-64 pt-16 pb-20 min-h-screen">
      <div class="p-6 md:p-margin-desktop space-y-gutter max-w-[1440px] mx-auto w-full">
        <slot />
      </div>
    </main>

    <!-- Fixed Footer (glass + floating shadow, desktop) -->
    <div class="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-30 bg-surface/80 backdrop-blur-md border border-outline-variant rounded-xl px-8 py-3 items-center justify-center min-w-[520px] shadow-[0_8px_32px_rgba(99,102,241,0.12)]">
      <AppFooter />
    </div>

    <!-- Mobile bottom nav -->
    <MobileBottomNav :tabs="mobileTabs" />
  </div>
</template>
