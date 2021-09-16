import { computed } from "vue";
import { useStore } from "vuex";

 export default function(){
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
 }