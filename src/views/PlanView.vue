<template>
  <ColumnsLayout>
    <template #navigation>
      <FormNavigation :steps="steps" />
    </template>
    <template #content></template>
    <template #footer></template>
  </ColumnsLayout>
</template>

<script lang="ts" setup>
import type { IFormNavigation } from "@/modules/plan/types";

import ColumnsLayout from "@/layouts/ColumnsLayout.vue";
import FormNavigation from "@/modules/plan/FormNavigation.vue";

const steps: IFormNavigation = [
  {
    index: 1,
    title: "Your info",
  },
  {
    index: 2,
    title: "Select plan",
  },
  {
    index: 3,
    title: "Add-ons",
  },
  {
    index: 4,
    title: "Summary",
  },
];
</script>
