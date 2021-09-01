<template>
  <div class="row mt-5">
    <div class="col-xs-12 col-md-4">
      <div
        class="card text-center"
        @drop="onDrop($event, 1)"
        @dragenter.prevent
        @dragover.prevent
      >
        <div class="card-header">
          Todo
          <span class="badge rounded-pill bg-warning text-dark">{{
            getTodoCount ? getTodoCount : "0"
          }}</span>
        </div>
        <draggable>
          <div
            class="card-middle"
            v-for="item in getTask(1)"
            :key="item.id"
            draggable
            @dragstart="startDrag($event, item)"
          >
            <div
              class="card-content"
              :style="{ 'background-color': item.color }"
            >
              <h4>{{ item.task }}</h4>
              <button class="btn" @click="deleteTask(item.id)">
                <i class="bi bi-trash card-content-icon"></i>
              </button>
            </div>
          </div>
        </draggable>
      </div>
    </div>
    <div class="col-xs-12 col-md-4">
      <div
        class="card text-center"
        @drop="onDrop($event, 2)"
        @dragenter.prevent
        @dragover.prevent
      >
        <div class="card-header">
          In Progress
          <span class="badge rounded-pill bg-warning text-dark">{{
            getInProgressCount ? getInProgressCount : "0"
          }}</span>
        </div>
        <draggable>
          <div
            class="card-middle"
            v-for="item in getTask(2)"
            :key="item.id"
            draggable
            @dragstart="startDrag($event, item)"
          >
            <div
              class="card-content"
              :style="{ 'background-color': item.color }"
            >
              <h4>{{ item.task }}</h4>
              <button class="btn" @click="deleteTask(item.id)">
                <i class="bi bi-trash card-content-icon"></i>
              </button>
            </div>
          </div>
        </draggable>
      </div>
    </div>
    <div class="col-xs-12 col-md-4">
      <div
        class="card text-center"
        @drop="onDrop($event, 3)"
        @dragenter.prevent
        @dragover.prevent
      >
        <div class="card-header">
          Done
          <span class="badge rounded-pill bg-warning text-dark">{{
            getDoneCount ? getDoneCount : "0"
          }}</span>
        </div>
        <draggable>
          <div
            class="card-middle"
            v-for="item in getTask(3)"
            :key="item.id"
            draggable
            @dragstart="startDrag($event, item)"
          >
            <div
              class="card-content"
              :style="{ 'background-color': item.color }"
            >
              <h4>{{ item.task }}</h4>
              <button class="btn" @click="deleteTask(item.id)">
                <i class="bi bi-trash card-content-icon"></i>
              </button>
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  components: {
    draggable: VueDraggableNext,
  },
  setup() {
    const store = useStore();
    function deleteTask(id) {
      store.commit("deleteTask", id);
    }
    function getTask(list) {
      return getAllTasks.value.filter((task) => task.list == list);
    }
    function startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    }
    function onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = getAllTasks.value.find((item) => item.id == itemID);
      item.list = list;
    }
    const getAllTasks = computed(function () {
      return store.getters.getAllTasks;
    });
    const getTodoCount = computed(function () {
      return store.getters.getTodoCount;
    });
    const getInProgressCount = computed(function () {
      return store.getters.getInProgressCount;
    });
    const getDoneCount = computed(function () {
      return store.getters.getDoneCount;
    });

    return {
      deleteTask,
      startDrag,
      onDrop,
      getTask,
      getAllTasks,
      getTodoCount,
      getInProgressCount,
      getDoneCount,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/list.scss";
</style>