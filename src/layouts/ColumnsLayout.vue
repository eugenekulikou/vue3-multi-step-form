<template>
  <div class="grid h-[inherit] lg:place-content-center">
    <div
      class="grid grid-rows-mobile gap-4 rounded-lg bg-magnolia lg:h-[600px] lg:w-[940px]
        lg:grid-cols-[minmax(0,_320px)] lg:bg-white lg:p-4 lg:grid-areas-form-desktop"
    >
      <aside class="lg:grid-in-nav">
        <slot name="navigation"></slot>
      </aside>

      <main class="mx-4 -mt-24 rounded-md bg-white lg:m-0 lg:bg-none lg:grid-in-form">
        <slot name="content"></slot>
      </main>

      <footer class="h-24 lg:grid-in-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>
