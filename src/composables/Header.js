import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";

 export default function(){
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
 }