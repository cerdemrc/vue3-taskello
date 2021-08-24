<template>
  <div class="task-alert">
    <div class="container">
      <h2>
        You've got <span class="task-count">{{ getTodoCount }} task</span> today
      </h2>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const getTodoCount = computed(function () {
      return store.getters.getTodoCount;
    });

    return { getTodoCount };
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