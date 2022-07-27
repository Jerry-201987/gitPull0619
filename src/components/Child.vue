<template>
  <div>
    <h1>孩子</h1>
    <p>{{ message }}</p>
    <!-- 方法3 $parent+$children -->
    <!-- <p>{{ number }}</p>
    <p>{{ parentMsg3 }}</p> -->
    <!-- 方法4 -->
    {{ msg4 }}
    <!-- 方法1 v-bind $emit -->
    <!-- <button @click="handleClick">按钮</button> -->
    <!-- 方法2 回调函数(callback) -->
    <!-- <button @click="changeMsgFn">按钮</button> -->
    <!-- 方法5 -->
    <!-- <button @click="$listeners.cgName5">按钮5</button> -->
    <GrandChild v-bind="$attrs" />
    <!-- 方法6 ref -->
    ref6:{{ age6 }}
  </div>
</template>

<script>
import GrandChild from "./GrandChild";
export default {
  components: {
    GrandChild,
  },
  //   props: ["message", "changeMsgFn"],
  props: ["message"],
  //   方法4
  inject: ["msg4"],
  data() {
    return {
      number: 10,
      age6: 20,
    };
  },
  methods: {
    // handleClick(){
    //     this.$emit('changeMsg1','Bye')
    // }
    cgAge6() {
      this.age6 = 50;
    },
  },
  computed: {
    // parentMsg3() {
    //   return this.$parent.message;
    // },
  },
};
</script>

<style>
</style>