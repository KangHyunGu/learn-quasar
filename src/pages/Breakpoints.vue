<template>
  <q-page class="q-pa-md q-pa-md-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Breakpoints</div>
      <q-separator class="q-my-md" />
      <div class="target flex flex-center">
        <span class="text-h2 text-weight-bold text-white">{{
          $q.screen.name
        }}</span>
      </div>
      <div v-if="$q.screen.gt.sm" class="target flex flex-center">
        <span class="text-h2 text-weight-bold text-white">{{
          $q.screen.name
        }}</span>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">$q.screen</div>
      <q-separator class="q-my-md" />
      <div class="text-subtitle1">
        <ul>
          <li v-for="(value, key) in $q.screen" :key="key">
            <!-- span 태그에 width가 적용이 안되는 이유는 inline 태그이다. -->
            <span class="inline-block" style="width: 120px">{{ key }}</span> -
            <span> {{ isFunction(value) ? '함수^^' : value }}</span>
          </li>
        </ul>
      </div>
    </section>
  </q-page>
</template>

<script>
// options API 접근
export default {
  mounted() {
    console.log('this.$q.screen : ', this.$q.screen);
  },
};
</script>


<script setup>
// composition API 접근
import { useQuasar } from 'quasar';
const $q = useQuasar();
console.log(' setup ==> $q.screen : ', $q.screen);

const isFunction = value => typeof value === 'function';
</script>

<style lang="scss" scoped>
.target {
  height: 200px;
  background-color: $dark;
}

// 0 ~ 500px 까지는 .target 내 background-color가 red를 적용
// 즉) 최대 500px까지 .target 속한 background는 red로 적용하겠다고 정의
// 하지만 위와 같이 px 값으로 지정하게 되면 애플리케이션 전체적으로 스타일에 대해 일관성을 맞추기 힘들어 질 것이다.
// 이럴때 Sass 내 정의 된 변수를 활용 할 수 있다.
//@media (max-width: 500px) {
@media (max-width: $breakpoint-xs-max) {
  .target {
    background-color: $red;
  }
}

.target {
  body.screen--sm & {
    background-color: $orange;
  }
}
</style>

