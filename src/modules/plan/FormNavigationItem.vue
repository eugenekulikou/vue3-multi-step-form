<template>
  <RouterLink :to="`/step/${index}`" class="flex flex-row items-center text-white">
    <span
      class="mr-4 grid h-8 w-8 place-content-center rounded-full border border-solid border-lightBlue
        text-lightBlue transition-colors duration-300 ease-in"
      :class="{ '!border-white bg-lightBlue !text-purplishBlue': active }"
    >
      {{ index }}</span
    >

    <p class="hidden w-fit uppercase lg:flex lg:flex-col">
      <span class="font-semibold opacity-50"> Step {{ index }}</span>

      <span class="font-bold tracking-wide">{{ title }}</span>
    </p>
  </RouterLink>
</template>

<script lang="ts" setup>
import type { IFormNavigationStep } from './types';

defineProps<IFormNavigationStep & { active: boolean }>();
</script>
