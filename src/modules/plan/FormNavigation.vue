<template>
  <nav
    class="h-full bg-[url('@/assets/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat pb-[4.6875rem] lg:bg-[url('@/assets/images/bg-sidebar-desktop.svg')] lg:bg-contain lg:pb-0"
  >
    <ul
      class="flex w-full flex-row justify-center space-x-4 overflow-auto py-8 lg:w-fit lg:flex-col lg:space-x-0 lg:space-y-4 lg:px-4"
    >
      <li v-for="step in steps" :key="step.index">
        <FormNavigationItem
          :index="step.index"
          :title="step.title"
          :active="isCurrentStep(step.index)"
        />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import type { IFormNavigation } from "./types";

import { computed } from "vue";
import { useRoute } from "vue-router";

import FormNavigationItem from "@/modules/plan/FormNavigationItem.vue";

interface Props {
  steps: IFormNavigation;
}

defineProps<Props>();
const location = useRoute();
const currentStep = computed(() => location.params.stepIndex);
const isCurrentStep = (stepIndex: number) => {
  return stepIndex.toString() === currentStep.value;
};
</script>
