<template>
  <RouterLink
    :to="`/step/${index}`"
    class="flex flex-row text-white items-center"
  >
    <span
      class="w-100$ text-lightBlue w-8 h-8 rounded-full grid place-content-center transition-colors duration-300 ease-in border border-solid border-lightBlue mr-4"
      :class="{ 'bg-lightBlue !border-white !text-purplishBlue': active }"
    >
      {{ index }}</span
    >
    <p class="lg:flex lg:flex-col hidden w-fit uppercase">
      <span class="opacity-50 font-semibold"> Step {{ index }}</span>
      <span class="font-bold tracking-wide">{{ title }}</span>
    </p>
  </RouterLink>
</template>

<script lang="ts" setup>
import type { IFormNavigationStep } from "./types";

defineProps<IFormNavigationStep & { active: boolean }>();
</script>
