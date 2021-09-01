<template>
  <div>
    <ul class="nav">
      <button type="button" class="btn add-task" @click="openDialog">
        <i class="bi bi-plus-circle"></i>
      </button>
    </ul>
    <div class="form-modal" v-if="dialog">
      <form>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <input
                v-model="newTask.task"
                class="form-control"
                placeholder="Task"
              />
            </div>
            <div class="is-danger" v-if="taskError">
              {{ taskError }}
            </div>
          </div>
          <div class="col-md-6 mt-3">
            <div class="form-group">
              <select class="form-select" v-model="newTask.list">
                <option selected disabled>List</option>
                <option v-for="list in lists" :key="list.id" :value="list.id">
                  {{ list.list }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6 mt-3">
            <div class="form-group">
              <select class="form-select" v-model="newTask.color">
                <option selected disabled>Color</option>
                <option
                  v-for="color in colors"
                  :key="color.id"
                  :value="color.id"
                >
                  {{ color.color }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-12 mt-4 d-flex justify-content-end gap-2">
            <button type="button" class="btn close-btn" @click="closeDialog">
              Close
            </button>
            <button
              type="button"
              class="btn save-btn"
              :disabled="
                !taskError == '' || !listError == '' || !colorError == ''
              "
              @click="saveTask"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const dialog = ref(false);
    const newTask = reactive({ task: "", list: "1", color: "black" });
    const lists = reactive([
      { list: "Todo", id: 1 },
      { list: "In Progress", id: 2 },
      { list: "Done", id: 3 },
    ]);
    const colors = reactive([
      { color: "Red", id: "red" },
      { color: "Blue", id: "blue" },
      { color: "Green", id: "green" },
      { color: "Pink", id: "pink" },
      { color: "Purple", id: "purple" },
      { color: "Orange", id: "orange" },
      { color: "Gray", id: "gray" },
      { color: "Black", id: "black" },
    ]);

    const taskError = computed(() => {
      return newTask.task === "" ? "This field is required" : "";
    });

    function openDialog() {
      return (dialog.value = true);
    }

    function saveTask() {
      const id = Math.floor(Math.random() * 100000);
      store.commit("saveTask", { ...newTask, id });
      dialog.value = false;
      cleanItem();
    }

    function closeDialog() {
      dialog.value = false;
      cleanItem();
    }

    function cleanItem() {
      newTask.task = "";
      newTask.list = "1";
      newTask.color = "black";
    }

    return {
      dialog,
      newTask,
      lists,
      colors,
      openDialog,
      closeDialog,
      saveTask,
      taskError,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/header.scss";
</style>