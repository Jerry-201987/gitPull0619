<template>
  <h1>
    {{firstName}}
    <hr />
    {{fullName}}
    <hr />
    {{$store.state.user.age}}
    {{$store.state.order.money}}
    <!-- <button @click="setAge(40);setMoney(80)">测试</button> -->
    <button @click="setAge(40)">测试</button>
    <button @click="setMoney(80)">测试</button>
  </h1>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let {
  mapState:mapStateUser,
  mapMutations:mapMutationsUser,
  mapActions,
  mapGetters
} = createNamespacedHelpers("user");
let {
  mapState:mapStateOrder,
  mapMutations:mapMutationsOrder,
} = createNamespacedHelpers("order");

function mapMyState(keys) {
  let obj = {};
  keys.forEach(key => {
    obj[key] = function() {
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
    ...mapStateUser(["firstName", "age", "lastName"]),
    ...mapStateOrder(['money']),
    ...mapGetters(["fullName"])
  },
  methods: {
    ...mapMutationsUser(["setAge"]),
    ...mapMutationsOrder(['setMoney']),
    ...mapActions(["aCgName2"])
  },
  mounted() {
    console.log(this.$store);
    this.aCgName2('散修');
  }
};
</script>

<style>
body {
  text-align: center;
}
</style>