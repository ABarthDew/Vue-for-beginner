<template>
  <div class="home">
    <h1>This is a Home page</h1>
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      value: new Date()
    }
  },
  components: {
    // HelloWorld
  }
};
</script>
