//NumberDisplay.vue

<template>
  <div>
    <p>{{somedata.num}}</p>
    <NumStepper :targetData="somedata" :clear="clear" />
  </div>
</template>

<script>
import NumStepper from "./NumStepper"

export default {
  components: {
    NumStepper
  },
  data() {
    return {
      somedata: {
        num: 999
      },
      tgt: this
    }
  },
  methods: {
    clear: function() {
      this.somedata.num = 0;
    }
  }
}
</script>
