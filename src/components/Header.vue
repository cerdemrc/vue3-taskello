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
          <div class="col-12 mt-5 d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-secondary"
              @click="closeDialog"
            >
              Close
            </button>
            <button type="button" class="btn btn-danger" @click="saveTask">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
    <!--<ul class="nav">
      <button
        type="button"
        class="btn add-task"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        <i class="bi bi-plus-circle"></i>
      </button>
    </ul>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div
                  class="col-12"
                  :class="{ error: v$.newTask.task.$errors.length }"
                >
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Task"
                    v-model="v$.newTask.task.$model"
                  />
                  <small class="red--text">Task is required</small>
                </div>
                <div
                  class="col-6 mt-3"
                  :class="{ error: v$.newTask.list.$errors.length }"
                >
                  <select class="form-select" v-model="v$.newTask.list.$model">
                    <option selected disabled>List</option>
                    <option v-for="list in lists" :key="list.id">
                      {{ list.list }}
                    </option>
                  </select>
                  <small class="red--text">List is required</small>
                </div>
                <div class="col-6 mt-3">
                  <select class="form-select" v-model="newTask.color">
                    <option selected disabled>Color</option>
                    <option v-for="color in colors" :key="color.id">
                      {{ color.color }}
                    </option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="closeDialog"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="saveTask"
              :disabled="v$.newTask.$invalid"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
//import useVuelidate from "@vuelidate/core";
import { ref, reactive } from "vue";
import { useStore } from "vuex";
export default {
  //  data() {
  //    return {
  //      dialog: false,
  //      newTask: {
  //        task: null,
  //        list: "List",
  //        color: "Color",
  //      },
  //    };
  //  },
  //  methods: {
  //    openDialog() {
  //      this.dialog = true;
  //    },
  //    saveTask() {
  //      const id = Math.floor(Math.random() * 100000);
  //      this.$store.commit("saveTask", { ...this.newTask, id });
  //      this.dialog = false;

  //      //cleaning
  //      this.newTask.task = "";
  //      this.newTask.list = "List";
  //      this.newTask.color = "Color";
  //    },
  //    closeDialog() {
  //      this.dialog = false;

  //      //cleaning
  //      this.newTask.task = "";
  //      this.newTask.list = "List";
  //      this.newTask.color = "Color";
  //    },
  //  },
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

    function openDialog() {
      return (dialog.value = true);
    }

    function saveTask() {
      const id = Math.floor(Math.random() * 100000);
      store.commit("saveTask", { ...this.newTask, id });
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

.red--text {
  color: rgb(221, 5, 5);
  font-weight: 500;
  padding: 5px;
  font-size: 12px;
}
</style>