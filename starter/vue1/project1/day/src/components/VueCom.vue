<template>
  <div>
    <p>
      Hello VueCom
    </p>

    <p v-for="(item, index) in list">
      {{ item }}, {{ index }}
    </p>
    <hr>

    <p v-for="i in 10">
      {{ i }}
    </p>

    <hr>

    <p v-for="(item, index) in list">
      <span v-if="index < 4">{{ item }}</span>
    </p>

    <hr>

    <p v-for="(item, index) in list">
      <span v-if="index==0">{{ item }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "VueCom",
  data: () => {
    return {
      flag: 1,
      list: [{message: 1}, {message: 2}, {message: 3}, {message: 4}, 5, 6, 7]
    }
  }
}
</script>

<style scoped>

</style>