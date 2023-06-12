<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Shadow</div>
      <q-separator class="q-my-md" />
      <div class="q-gutter-y-sm">
        <div class="shadow-1 q-pa-sm">shadow-1</div>
        <div class="shadow-7 q-pa-sm">shadow-7</div>
        <div class="shadow-24 q-pa-sm">shadow-24</div>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Visibility</div>
      <q-separator class="q-my-md" />
      <div class="ellipsis">
        <!-- ellipsis 화면크기에 맞게 text 글자 표시 -->
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        eligendi? Praesentium nostrum necessitatibus voluptates est, rem odit,
        error neque, in sequi veniam cupiditate culpa quis. Quis voluptate quo
        molestiae nostrum!
      </div>
      <hr />
      <div class="ellipsis-2-lines cursor-pointer">
        <!-- ellipsis 화면크기에 맞게 text 글자 표시 (2줄까지) -->
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        eligendi? Praesentium nostrum necessitatibus voluptates est, rem odit,
        error neque, in sequi veniam cupiditate culpa quis. Quis voluptate quo
        molestiae nostrum!
      </div>
      <hr />
      <div class="ellipsis-3-lines">
        <!-- ellipsis 화면크기에 맞게 text 글자 표시 (3줄까지) -->
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        eligendi? Praesentium nostrum necessitatibus voluptates est, rem odit,
        error neque, in sequi veniam cupiditate culpa quis. Quis voluptate quo
        molestiae nostrum!
      </div>
    </section>
  </q-page>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
