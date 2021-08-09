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
          <span class="badge rounded-pill bg-warning text-dark">4</span>
        </div>
        <div class="card-middle" v-for="i in 4" :key="i">
          <div class="card-content">
            <h4>Learn to code</h4>
            <button class="btn">
              <i class="bi bi-trash card-content-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-4">
      <div
        class="card text-center"
        @drop="onDrop($event, 1)"
        @dragenter.prevent
        @dragover.prevent
      >
        <div class="card-header">
          In Progress
          <span class="badge rounded-pill bg-warning text-dark">2</span>
        </div>
        <div class="card-middle" v-for="i in 2" :key="i">
          <div class="card-content">
            <h4>Learn to code</h4>
            <button class="btn">
              <i class="bi bi-trash card-content-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-md-4">
      <div
        class="card text-center"
        @drop="onDrop($event, 1)"
        @dragenter.prevent
        @dragover.prevent
      >
        <div class="card-header">
          Done
          <span class="badge rounded-pill bg-warning text-dark">1</span>
        </div>
        <div class="card-middle">
          <div class="card-content">
            <h4>Learn to code</h4>
            <button class="btn">
              <i class="bi bi-trash card-content-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--<v-row class="list">
    <v-col cols="12" lg="4">
      <v-card
        max-width="400"
        class="mx-auto list-card"
        @drop="onDrop($event, 1)"
        @dragenter.prevent
        @dragover.prevent
      >
        <v-app-bar dark color="black">
          <v-badge
            color="orange"
            inline
            :content="getTodoCount ? getTodoCount : '0'"
          >
            To Do
          </v-badge>
        </v-app-bar>

        <v-container>
          <v-row dense>
            <v-col
              v-for="item in getTask(1)"
              :key="item.id"
              cols="12"
              draggable
              @dragstart="startDrag($event, item)"
            >
              <v-card :color="item.color" dark class="list-card-content">
                <v-card-actions>
                  <div>
                    <v-card-title
                      class="text-h5"
                      v-text="item.task"
                    ></v-card-title>
                  </div>
                  <v-spacer></v-spacer>

                  <v-btn icon @click="deleteTask(item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4">
      <v-card
        max-width="400"
        class="mx-auto list-card"
        @drop="onDrop($event, 2)"
        @dragenter.prevent
        @dragover.prevent
      >
        <v-app-bar dark color="black">
          <v-badge
            color="orange"
            inline
            :content="getInProgressCount ? getInProgressCount : '0'"
          >
            In Progress
          </v-badge>
        </v-app-bar>

        <v-container>
          <v-row dense>
            <v-col
              v-for="item in getTask(2)"
              :key="item.id"
              cols="12"
              draggable
              @dragstart="startDrag($event, item)"
            >
              <v-card :color="item.color" dark class="list-card-content">
                <v-card-actions>
                  <div>
                    <v-card-title
                      class="text-h5"
                      v-text="item.task"
                    ></v-card-title>
                  </div>
                  <v-spacer></v-spacer>

                  <v-btn icon @click="deleteTask(item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
    <v-col cols="12" lg="4">
      <v-card
        max-width="400"
        class="mx-auto list-card"
        @drop="onDrop($event, 3)"
        @dragenter.prevent
        @dragover.prevent
      >
        <v-app-bar dark color="black">
          <v-badge
            color="orange"
            inline
            :content="getDoneCount ? getDoneCount : '0'"
          >
            Done
          </v-badge>
        </v-app-bar>

        <v-container>
          <v-row dense>
            <v-col
              v-for="item in getTask(3)"
              :key="item.id"
              cols="12"
              draggable
              @dragstart="startDrag($event, item)"
            >
              <v-card :color="item.color" dark class="list-card-content">
                <v-card-actions>
                  <div>
                    <v-card-title
                      class="text-h5"
                      v-text="item.task"
                    ></v-card-title>
                  </div>
                  <v-spacer></v-spacer>

                  <v-btn icon @click="deleteTask(item.id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>-->
</template>

//<script>
//import { mapGetters } from "vuex";
//export default {
//  name: "List",
//  computed: {
//    ...mapGetters([
//      "getAllTasks",
//      "getTodoCount",
//      "getInProgressCount",
//      "getDoneCount",
//    ]),
//  },
//  methods: {
//    deleteTask(id) {
//      this.$store.commit("deleteTask", id);
//    },
//    getTask(list) {
//      return this.getAllTasks.filter((task) => task.list == list);
//    },
//    startDrag(evt, item) {
//      evt.dataTransfer.dropEffect = "move";
//      evt.dataTransfer.effectAllowed = "move";
//      evt.dataTransfer.setData("itemID", item.id);
//    },
//    onDrop(evt, list) {
//      const itemID = evt.dataTransfer.getData("itemID");
//      const item = this.getAllTasks.find((item) => item.id == itemID);
//      item.list = list;
//    },
//  },
//};
//
</script>

<style lang="scss" scoped>
.card {
  &-middle {
    margin: 10px;
  }
  &-header {
    background: #000;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: sandybrown;
    color: #fff;
    padding: 5px;
    border-radius: 10px;
    transform: translate(0, -1px);
    transition: 0.2s;
    cursor: move;
    &:hover {
      transition: 0.2s;
      transform: translate(0, 1px);
    }
    &-icon {
      font-size: 1.5rem;
    }
  }
}
</style>