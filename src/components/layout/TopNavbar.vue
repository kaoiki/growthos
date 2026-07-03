<script setup lang="ts">
import { ref } from 'vue'
import MaterialIcon from '../common/MaterialIcon.vue'
import { isLoggedIn, currentUser, logout } from '../../lib/auth'

const showProjectMenu = ref(false)
const activeProject = ref('GrowthOS')
const projects = [
  { name: 'GrowthOS', color: '#4648d4' },
  { name: 'Doxieland', color: '#6063ee' },
  { name: 'Side Project X', color: '#6cf8bb' },
]

function toggleProjectMenu() {
  showProjectMenu.value = !showProjectMenu.value
}

function closeProjectMenu() {
  showProjectMenu.value = false
}

const showDropdown = ref(false)
const showMobileSearch = ref(false)

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

function closeDropdown() {
  showDropdown.value = false
}

function openMobileSearch() {
  showMobileSearch.value = true
}

function closeMobileSearch() {
  showMobileSearch.value = false
}
</script>

<template>
  <header class="flex justify-between items-center w-full px-6 md:px-margin-desktop h-16 sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
    <!-- Mobile Logo -->
    <div class="flex flex-col md:hidden">
      <div class="flex items-center gap-2">
        <MaterialIcon name="trending_up" class="text-primary" size="22" />
        <span class="font-headline-md text-headline-md font-bold text-primary">GrowthOS</span>
      </div>
      <span class="w-fit">
        <span class="typing-slogan text-[10px] text-on-surface-variant font-semibold leading-tight pl-[2px]">Grow in every direction.</span>
      </span>
    </div>

    <!-- Search + Project Switcher -->
    <div class="flex items-center gap-4 flex-1">
      <div class="relative w-full max-w-md hidden sm:flex items-center gap-2">
        <!-- Search Input -->
        <div class="relative flex-1">
          <MaterialIcon
            name="search"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
            size="20"
          />
          <input
            class="w-full bg-surface-container-low border border-outline-variant rounded-full py-1.5 pl-10 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
            placeholder="Search content, ideas or insights...  Press ⏎ to send"
            type="text"
          />
        </div>
      </div>
    </div>

    <!-- Right actions -->
    <div class="flex items-center gap-4">
      <!-- Quick Capture -->
      <button class="hidden lg:flex items-center gap-2 text-primary font-bold px-4 py-2 hover:bg-primary-container/5 rounded-lg transition-colors">
        <MaterialIcon name="bolt" />
        <span>Quick Capture</span>
      </button>

      <div class="h-6 w-[1px] bg-outline-variant mx-2 hidden lg:block"></div>

      <!-- Mobile Search -->
      <button
        class="flex md:hidden items-center justify-center p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors"
        @click="openMobileSearch"
      >
        <MaterialIcon name="search" size="20" />
      </button>

      <!-- Project Switcher -->
      <div class="relative">
        <button
          class="flex items-center justify-center p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors"
          @click.stop="toggleProjectMenu"
        >
          <MaterialIcon name="swap_horiz" size="20" />
        </button>
        <Transition
          enter-active-class="transition ease-out duration-150"
          enter-from-class="opacity-0 -translate-y-1"
          leave-active-class="transition ease-in duration-100"
          leave-to-class="opacity-0 -translate-y-1"
        >
          <div
            v-if="showProjectMenu"
            class="absolute right-0 mt-2 w-44 bg-surface border border-outline-variant rounded-xl shadow-lg overflow-hidden z-50"
          >
            <div class="p-2 text-[11px] text-on-surface-variant uppercase tracking-wider px-3 pt-2">Active Projects</div>
            <a
              v-for="p in projects"
              :key="p.name"
              href="#"
              class="flex items-center gap-3 px-3 py-2.5 text-sm text-on-surface hover:bg-surface-container-low transition-colors"
              :class="activeProject === p.name ? 'font-semibold' : ''"
              @click="activeProject = p.name"
            >
              <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: p.color }"></span>
              <span class="flex-1">{{ p.name }}</span>
              <MaterialIcon
                v-if="activeProject === p.name"
                name="check"
                size="16"
                class="text-primary"
              />
            </a>
          </div>
        </Transition>
        <div
          v-if="showProjectMenu"
          class="fixed inset-0 z-[-1]"
          @click="closeProjectMenu"
        ></div>
      </div>

      <!-- Notifications -->
      <button class="relative flex items-center justify-center p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors">
        <MaterialIcon name="notifications" class="leading-none" />
        <span class="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
      </button>

      <!-- Avatar Dropdown -->
      <div class="relative">
        <button
          class="flex items-center cursor-pointer hover:bg-surface-container-low p-2 rounded-full transition-colors"
          @click.stop="toggleDropdown"
        >
          <MaterialIcon
            name="account_circle"
            size="24"
            :wght="300"
            :fill="isLoggedIn"
            :class="isLoggedIn ? 'text-primary' : 'text-outline'"
          />
        </button>

        <!-- Dropdown Menu -->
        <Transition
          enter-active-class="transition ease-out duration-150"
          enter-from-class="opacity-0 -translate-y-1"
          leave-active-class="transition ease-in duration-100"
          leave-to-class="opacity-0 -translate-y-1"
        >
          <div
            v-if="showDropdown"
            class="absolute right-0 mt-2 w-48 bg-surface border border-outline-variant rounded-xl shadow-lg overflow-hidden z-50"
          >
            <!-- Logged Out -->
            <template v-if="!isLoggedIn">
              <div class="px-4 pt-3.5 pb-2.5 text-xs text-on-surface-variant">Not signed in</div>
              <div class="mx-3 my-1 h-px bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent"></div>
              <router-link
                to="/login"
                class="flex items-center gap-3 px-4 py-3 text-on-surface hover:bg-surface-container-low transition-colors"
                @click="closeDropdown"
              >
                <MaterialIcon name="login" size="20" class="text-on-surface-variant" />
                <span class="text-sm font-medium">Login</span>
              </router-link>
              <router-link
                to="/register"
                class="flex items-center gap-3 px-4 py-3 text-on-surface hover:bg-surface-container-low transition-colors"
                @click="closeDropdown"
              >
                <MaterialIcon name="person_add" size="20" class="text-on-surface-variant" />
                <span class="text-sm font-medium">Register</span>
              </router-link>
            </template>
            <!-- Logged In -->
            <template v-else>
              <div class="px-4 pt-3.5 pb-2.5 text-sm font-semibold text-on-surface truncate">{{ currentUser?.name || 'User' }}</div>
              <div class="mx-3 my-1 h-px bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent"></div>
              <button
                class="w-full flex items-center gap-3 px-4 py-3 text-on-surface hover:bg-surface-container-low transition-colors"
                @click="logout(); closeDropdown()"
              >
                <MaterialIcon name="logout" size="20" class="text-on-surface-variant" />
                <span class="text-sm font-medium">Logout</span>
              </button>
            </template>
          </div>
        </Transition>

        <!-- Backdrop for outside click -->
        <div
          v-if="showDropdown"
          class="fixed inset-0 z-[-1]"
          @click="closeDropdown"
        ></div>
      </div>
    </div>

  </header>

  <!-- Mobile Search Modal (teleport to body to avoid sticky clipping) -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      leave-active-class="transition ease-in duration-150"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="showMobileSearch"
        class="fixed inset-0 z-[100] flex items-center justify-center md:hidden"
      >
        <div class="fixed inset-0 bg-black/40 backdrop-blur-sm" @click="closeMobileSearch"></div>
        <div class="relative w-[90%] max-w-sm bg-surface rounded-2xl border border-outline-variant shadow-xl p-5 space-y-4">
          <div class="relative">
            <MaterialIcon
              name="search"
              class="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
              size="20"
            />
            <input
              class="w-full bg-surface-container-low border border-outline-variant rounded-full py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
              placeholder="Search content, ideas or insights..."
              type="search"
              autofocus
              enterkeyhint="search"
              @keydown.enter="closeMobileSearch"
            />
          </div>
          <p class="text-center text-xs text-on-surface-variant">Press <kbd class="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-mono bg-surface-container-low border border-outline-variant rounded">⏎</kbd> to send</p>
          <button
            class="w-full py-2 text-sm font-medium text-on-surface-variant hover:text-on-surface bg-surface-container-low hover:bg-surface-container-high rounded-xl transition-colors"
            @click="closeMobileSearch"
          >
            Cancel
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.typing-slogan {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  border-right: 1.5px solid var(--color-primary);
  background: linear-gradient(90deg, #4648d4, #6063ee, #6cf8bb, #ffb95f, #e8585a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: typewriter 7s ease-in-out infinite, blink-caret 0.7s step-end infinite;
}

@keyframes typewriter {
  0%, 5%   { width: 0; }
  40%      { width: 100%; }
  65%      { width: 100%; }
  90%, 100% { width: 0; }
}

@keyframes blink-caret {
  0%, 100% { border-right-color: transparent; }
  50%      { border-right-color: var(--color-primary); }
}
</style>
