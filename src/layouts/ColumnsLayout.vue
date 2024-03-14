<template>
  <div class="grid h-[inherit] lg:place-content-center">
    <div
      class="grid grid-rows-mobile lg:w-[940px] lg:grid-areas-form-desktop lg:grid-cols-[minmax(0,_320px)] gap-4 lg:h-[600px] bg-magnolia lg:bg-white lg:p-4 rounded-lg"
    >
      <aside class="lg:grid-in-nav">
        <slot name="navigation"></slot>
      </aside>
      <main
        class="lg:grid-in-form bg-white lg:bg-none -mt-24 mx-4 lg:m-0 rounded-md"
      >
        <slot name="content"></slot>
      </main>
      <footer class="lg:grid-in-footer h-24">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>
