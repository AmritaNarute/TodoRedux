
import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      console.log(nanoid());
      // 'dgPXxUz_6fWIQBD8XmiSy'

      console.log(action.payload);
      const newTask = {
        id: nanoid(),
        name: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      console.log(action.payload.id);
      console.log(state);
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const taskSlice =createSlice({
//     name:'tasks',
//     initialState:[],
//     reducers:{
//         addTasks:(state,action)=>{
//             const newTask ={
//                 id: action.payload.id,
//                 name:action.payload.name,
//             }
//             state.push(newTask);
//         },
//         deleteTask:(state,action)=>{
//             return state.filter((item)=> item.id !== action.payload.id);
//         }
//     }
// })

// export const { addTask, deleteTask} = taskSlice.actions;

// export default taskSlice.reducer;