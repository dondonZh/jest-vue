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

作者：江米小枣tonylua
链接：https://juejin.im/post/5bd0979f5188251fab50a551
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。