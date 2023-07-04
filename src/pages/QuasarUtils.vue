<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Date Util</div>
      <q-separator class="q-my-md" />
      <!-- {{  new Date(), formatString(YYYY-MM-DD) }} -->
      <div class="text-h6">formatDate - {{ formatDate(new Date(), FORMAT) }}</div>
      <div class="text-h6">
        addToDate - {{ formatDate(addToDate(new Date(), { days: 7 }), FORMAT) }}
      </div>
      <div class="text-h6">
        subtractFromDate - {{ formatDate(subtractFromDate(new Date(), { days: 7 }), FORMAT) }}
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Format Util</div>
      <q-separator class="q-my-md" />
      <div class="text-h6">
        <!-- 총 10자리의 문자열 중 hello를 제외한 나머지 '0'으로 채워짐 -->
        pad - {{ pad('hello', 10, '#') }}
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Type Checking Util</div>
      <q-separator class="q-my-md" />
      <div class="text-h6">
        <div class="text-h6">objA === objB - {{ objA === objB }}</div>
        <div class="text-h6">deepEqual(objA, ObjB) - {{ deepEqual(objA, objB) }}</div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { date, format, is } from 'quasar';

const { formatDate, addToDate, subtractFromDate } = date;
const FORMAT = 'YYYY-MM-DD HH:mm:ss';

const { pad } = format;

const { deepEqual } = is;

const objA = { name: 'abc' }
const objB = { name: 'abc' }
// const objA = { name: 'abc', age: 30, hobby: 'game' };
// const objB = { name: 'abc', age: 33, hobby: 'sing' };

</script>

<style lang='scss' scoped></style>
