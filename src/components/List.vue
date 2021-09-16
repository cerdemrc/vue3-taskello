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
import List from "../composables/List";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  components: {
    draggable: VueDraggableNext,
  },
  setup() {
    const {
      deleteTask,
      startDrag,
      onDrop,
      getTask,
      getAllTasks,
      getTodoCount,
      getInProgressCount,
      getDoneCount,
    } = List();
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