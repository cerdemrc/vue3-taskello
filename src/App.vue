<template>
  <div id="app">
    <Header />
    <TaskAlert />
    <div class="container">
      <List />
    </div>
  </div>
</template>

<script>
import List from "./components/List.vue";
import Header from "./components/Header.vue";
import TaskAlert from "./components/TaskAlert.vue";
export default {
  components: {
    List,
    Header,
    TaskAlert,
  },
};
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  background: url("https://wallpaperboat.com/wp-content/uploads/2019/06/plain-black-05.jpg")
    no-repeat center center fixed;
  background-size: cover;
}
</style>
