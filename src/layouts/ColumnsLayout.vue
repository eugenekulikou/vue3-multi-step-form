<template>
  <div class="grid h-[inherit] lg:place-content-center">
    <div
      class="grid grid-rows-mobile lg:w-[940px] lg:grid-areas-form-desktop gap-4 lg:h-[600px] bg-magnolia lg:bg-white lg:p-4 rounded-lg"
    >
      <nav class="lg:grid-in-nav">
        <slot name="navigation"></slot>
      </nav>
      <main class="lg:grid-in-form bg-white lg:bg-none">
        <slot name="form"></slot>
      </main>
      <footer class="lg:grid-in-footer h-24">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>
