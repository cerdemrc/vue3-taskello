<template>
  <div class="task-alert">
    <div class="container">
      <!--<h2 v-if="getTodoCount > 0">
        You've got
        <span class="task-count">{{ getTodoCount }} task</span>
        today
      </h2>-->
      <h2>You've got <span class="task-count">4 task</span> today</h2>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getTodoCount() {
      return this.$store.getters.getTodoCount;
    },
  },
};
</script>

<style lang="scss" scoped>
.task-alert {
  text-align: center;
  & h2 {
    font-weight: bold;
    color: rgb(255, 255, 255);
    letter-spacing: 2px;
  }
}

.task-count {
  color: #ff5656;
}
</style>