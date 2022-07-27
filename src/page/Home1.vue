<template>
  <h1>
    {{ firstName }}
    <hr />
    {{ fullName }}
    <hr />
    age:{{ age }}
    <!-- {{ $store.state.user.age }} -->
    money:{{ $store.state.order.money }}
    <!-- {{ money }} -->
    <br />
    <button @click="setAge('并集');setMoney('并集')">测试并集</button>
    <!-- 方法3 89 -->
    <button @click="setAgeMutation(3)">测试age方法3</button>
    <!-- 方法2 87 -->
    <button @click="setAge(2)">测试age方法2</button>
    <button @click="setMoney(2)">测试money方法2</button>
    <!-- 方法1 88 -->
    <button @click="test">测试age方法1</button>
    <button @click="aCgName1">aCgName1</button>
    <!-- <button @click="change">aCgName2</button> -->
    <button @click="change2(`${money-21}`)">aCgName2</button>
  </h1>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

function mapMyState(keys) {
  let obj = {};
  keys.forEach((key) => {
    obj[key] = function () {
      return this.$store.state[key];
    };
  });
  return obj;
}
// function mapGetters(keys) {
//   let obj = {};
//   keys.forEach(key => {
//     obj[key] = function() {
//       return this.$store.getters[key];
//     };
//   });

//   return obj;
// }

// function mapMutations(keys) {
//   let obj = {};
//   keys.forEach(key => {
//     obj[key] = function(val) {
//       this.$store.commit(key,val)
//     };
//   });

//   return obj;
// }

export default {
  computed: {
    ...mapState("user", ["firstName", "age", "lastName"]),
    ...mapState("order", ["money"]),
    ...mapGetters("user", ["fullName"]),
  },
  methods: {
    /*方法2 87*/
    ...mapMutations("user", ["setAge"]),
    /*方法3 键值对*/
    ...mapMutations({setAgeMutation:"user/setAge"}),
    ...mapMutations("order", ["setMoney"]),
    // ...mapActions("user", ["aCgName1", "aCgName2"]),
    ...mapActions("user", ["aCgName1"]),
    ...mapActions({change2:"user/aCgName2"}),
    /*方法1 commit*/
    test() {
      this.$store.commit("user/setAge", 1);
    },
    // change() {
    //   this.$store.dispatch("user/aCgName2", `${this.money}`);
    // }
  },
  async mounted() {
    // let res = await this.getUserAge();
  },
};
</script>

<style>
body {
  text-align: center;
}
</style>