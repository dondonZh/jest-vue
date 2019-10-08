//NumStepper.vue

<template>
  <div>
    <button class="plus" v-on:click="updateNumber(+1)">加</button>
    <button class="minus" v-on:click="updateNumber(-1)">减</button>
    <button class="zero" v-on:click="clear">清</button>
  </div>
</template>

<script>
export default {
  props: {
    targetData: Object,
    clear: Function
  },
  methods: {
    updateNumber: function(n) {
      this.targetData.num += n;
    }
  }
}
</script>
