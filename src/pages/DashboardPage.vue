<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue'
import HeroCard from '../components/dashboard/HeroCard.vue'
import DailyTasks from '../components/dashboard/DailyTasks.vue'
import IdeaInbox from '../components/dashboard/IdeaInbox.vue'
import ContentPipeline from '../components/dashboard/ContentPipeline.vue'
import DistributionPlan from '../components/dashboard/DistributionPlan.vue'
import GrowthInsights from '../components/dashboard/GrowthInsights.vue'
</script>

<template>
  <DefaultLayout>
    <!-- Growth Loop Overview -->
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      <HeroCard />
      <DailyTasks />
    </section>

    <!-- Multi-Column Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter items-start">
      <IdeaInbox />
      <ContentPipeline />
      <div class="space-y-gutter">
        <DistributionPlan />
        <GrowthInsights />
      </div>
    </div>
  </DefaultLayout>
</template>
