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
          <div class="col-12 mt-5 d-flex justify-content-end gap-2">
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
    const newTask = reactive({ task: "", list: "List", color: "Color" });
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
      return newTask.task === "" ? "Bu alan zorunludur" : "";
    });

    function openDialog() {
      return (dialog.value = true);
    }

    function saveTask() {
      const id = Math.floor(Math.random() * 100000);
      if (newTask.color == "Color") {
        const defaultTask = {
          task: newTask.task,
          list: 1,
          color: "black",
        };
        store.commit("saveTask", { ...defaultTask, id });
      } else {
        store.commit("saveTask", { ...newTask, id });
      }
      dialog.value = false;
      cleanItem();
    }

    function closeDialog() {
      dialog.value = false;
      cleanItem();
    }

    function cleanItem() {
      newTask.task = "";
      newTask.list = "List";
      newTask.color = "Color";
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
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.add-task {
  transform: translate(0, -1px);
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    transform: translate(0, 1px);
  }
  & i {
    font-size: 2rem;
    color: #fff;
  }
}

.form-modal {
  position: absolute;
  z-index: 99;
  left: 30%;
  top: 15%;
  background: #fff;
  padding: 30px;
  width: 40%;
  margin: 0 auto;
  border-radius: 20px;
}

.is-danger {
  color: red;
  font-weight: 500;
  padding: 5px;
  font-size: 12px;
}

.btn:hover {
  color: #fff;
}

.save-btn {
  background: rgba(255, 0, 0, 0.575);
  color: #fff;
  &:hover {
    background: red;
  }
}

.close-btn {
  background: rgba(0, 0, 0, 0.473);
  color: #fff;
  &:hover {
    background: #000;
  }
}
</style>