<template>
  <ul class="nav">
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
              <div class="col-12">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Task"
                  v-model="newTask.task"
                />
                <!--<small v-if="!$v.newTask.task.required" class="red--text"
                  >Task is required</small
                >-->
              </div>
              <div class="col-6 mt-3">
                <select class="form-select" v-model="newTask.list">
                  <option selected disabled>List</option>
                  <option v-for="list in lists" :key="list.id">
                    {{ list.list }}
                  </option>
                </select>
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
          <button type="button" class="btn btn-success" @click="saveTask">
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { validationMixin } from "vuelidate";
//import { required } from "vuelidate/lib/validators";
import { ref, reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const dialog = ref(false);
    const newTask = reactive({ task: "", list: null, color: null });
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

    function saveTask() {
      const id = Math.floor(Math.random() * 100000);
      store.commit("saveTask", { ...this.newTask, id });
      this.dialog = false;

      //cleaning
      //  this.newTask.task = "";
      //  this.newTask.list = "";
      //  this.newTask.color = "";
    }

    function closeDialog() {
      this.dialog = false;

      //cleaning
      this.newTask.task = "";
      this.newTask.list = "";
      this.newTask.color = "";
    }

    return { dialog, newTask, lists, colors, saveTask, closeDialog };
  },
  //  mixins: [validationMixin],
  //  validations: {
  //    newTask: {
  //      task: { required },
  //      list: { required },
  //    },
  //  },
  //  data() {
  //    return {
  //      dialog: false,
  //      newTask: {
  //        task: "",
  //        list: null,
  //        color: null,
  //      },
  //      lists: [
  //        { list: "Todo", id: 1 },
  //        { list: "In Progress", id: 2 },
  //        { list: "Done", id: 3 },
  //      ],
  //      colors: [
  //        { color: "Red", id: "red" },
  //        { color: "Blue", id: "blue" },
  //        { color: "Green", id: "green" },
  //        { color: "Pink", id: "pink" },
  //        { color: "Purple", id: "purple" },
  //        { color: "Orange", id: "orange" },
  //        { color: "Gray", id: "gray" },
  //        { color: "Black", id: "black" },
  //      ],
  //    };
  //  },
  //  methods: {
  //    saveTask() {
  //      this.$v.$touch();
  //      if (!this.$v.$invalid) {
  //        const id = Math.floor(Math.random() * 100000);
  //        this.$store.commit("saveTask", { ...this.newTask, id });
  //        this.dialog = false;
  //        //cleaning
  //        this.newTask.task = "";
  //        this.newTask.list = "";
  //        this.newTask.color = "";
  //      }
  //    },
  //    closeDialog() {
  //      this.dialog = false;
  //      //cleaning
  //      this.newTask.task = "";
  //      this.newTask.list = "";
  //      this.newTask.color = "";
  //    },
  //    submit() {
  //      this.$v.$touch();
  //    },
  //  },
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
</style>