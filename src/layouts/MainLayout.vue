<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const linksList = [
  {
    title: 'Typography',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/typography',
  },
  {
    title: 'Colors',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/colors',
  },
  {
    title: 'Spacing',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/spacing',
  },
  {
    title: 'Breakpoints',
    caption: 'quasar.dev',
    icon: 'school',
    to: '/breakpoint',
  },
];
</script>


<script setup>
import { ref } from 'vue';
//https://quasar.dev/quasar-cli-vite/handling-vite#folder-aliases
//Folder aliases 란 참조
//기존에는 상위 디렉토리(../) 명시해야되지만
//quasar Vite Cli 기반은 특정 공식문서 Folder aliases란을 참조해보면
//정의 된 별칭이 존재한다. 그래서 특정 별칭은 기본 구조에 맞게 경로를 알아서 찾음
import EssentialLink from 'components/EssentialLink.vue';

const leftDrawerOpen = ref(false);
const essentialLinks = linksList;
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
</script>
