<template>
  <div @click="add">{{ count }} -- count</div>
</template>

<script setup>
import { ref, computed } from "vue";
// import { useStore } from "vuex";
import store from "../store/index";

// let store = useStore();
console.log(store.state.count);
let count = computed(() => store.state.count);
let double = computed(() => store.getters.double);
function add() {
  store.commit("add");
}
</script>
<style lang="less" scoped></style>
