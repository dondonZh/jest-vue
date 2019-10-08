//NumStepper2.vue

<template>
  <div>
    <button class="plus" v-on:click="updateFunc(+1)">加</button>
    <button class="minus" v-on:click="updateFunc(-1)">减</button>
    <button class="zero" v-on:click="clearFunc">清</button>
  </div>
</template>

<script>
export default {
  props: {
    updateFunc: Function,
    clearFunc: Function
  }
}
</script>

