import { createStore } from 'vuex'
import { createLogger } from 'vuex'

export const store = createStore({
    state: () => ({
        items: [
            {
                id: 0,
                color: "purple",
                task: "Go shopping",
                list: 1,
            },
            {
                id: 1,
                color: "red",
                task: "Learn to code",
                list: 2,
            },
            {
                id: 2,
                color: "orange",
                task: "Feed Dog",
                list: 3,
            },
            {
                id: 3,
                color: "orange",
                task: "deneme",
                list: 3,
            },
          ],
    }),
    getters:{
        getAllTasks(state){
            //const tasks = JSON.parse(localStorage.getItem("tasks"));
            //if(tasks){
            //    return tasks;
            //}
            return state.items;
        },
        getTodoCount(state){
            const tasks = state.items.filter(x => x.list == 1);
            return tasks.length;
        },
        getInProgressCount(state){
            const tasks = state.items.filter(x => x.list == 2);
            return tasks.length;
        },
        getDoneCount(state){
            const tasks = state.items.filter(x => x.list == 3);
            return tasks.length;
        }
    },
    mutations:{
        deleteTask(state, id){
            const index = state.items.findIndex(i => i.id === id);
            console.log(index)
            state.items.splice(index, 1);
            //localStorage.setItem("tasks", JSON.stringify(state.items));
        },
        saveTask(state, payload){           
            state.items.push(payload);
            //localStorage.setItem("tasks", JSON.stringify(state.items))
        }
    },
    plugins: [createLogger()]
})

export default store;