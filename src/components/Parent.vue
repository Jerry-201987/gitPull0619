<template>
  <div>
    <h1>父亲</h1>
    <p>{{ message }}</p>
    <!-- <Child :message="message" @changeMsg1="message = $event" /> -->
    <!-- <Child :message="message" :changeMsgFn="cgMsg2" /> -->
    <!-- <button @click="cgChildNum3">按钮</button> -->
    <!-- <Child /> -->
    <!-- 方法5 $attrs + $listeners -->
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <!-- <Child :name="name" :age="age" @cgName5="cgName5" /> -->
    <!-- 方法6 ref -->
    <Child ref="childComp6"/>
    <button @click="cgName6">按钮6</button>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  components: {
    Child,
  },
  data() {
    return {
      message: "Hello ljy!",
      name: "ljy28",
      age: 28,
    };
  },
  //   方法4
  provide: {
    msg4: "Hello 方法4",
  },
  methods: {
    // cgMsg2() {
    //   this.message = "Bye";
    // },
    // cgChildNum3() {
    //   this.$children[0].number = 50;
    // },
    cgName5() {
      this.name = "饶";
    },
    cgName6(){
        console.log('前',this.$refs.childComp6.age6);
        this.$refs.childComp6.cgAge6();
        console.log('后',this.$refs.childComp6.age6);
    }
  },
};
</script>

<style>
</style>