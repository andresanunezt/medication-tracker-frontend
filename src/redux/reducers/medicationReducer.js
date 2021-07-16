
export const medicationReducer =  (state = [], action)=> {
  
  console.log(action)
    switch(action.type){
  
        case "ADD_MEDICATIONS":
          return [...action.medications]

        case "ADD_NEW_MEDICATION":

         return [...state,action.medications]

           
         case "DELETE_MEDICATION":
          let restOfMeds = state.filter( (medication)=> medication !== action.medication )
          return [...restOfMeds]

                                 
        default: 
            return state
  
    }
  
  
  }

  // const medicationsReducer = (state = { medications: [], loading: false }, action) => {
//     switch(action.type) {
//       case 'LOADING_MEDICATION':
//         return {
//           ...state,
//           medications: [...state.medications],
//           loading: true
//         }
//       case 'ADD_MEDICATIONS':
//         return {
//           ...state,
//           medications: action.medications,
//           loading: false
//         }
//       default:
//         return state;
//     }
//   }
  

// {
//     id: 1,
//     name: "Venlafaxine",
//     directions: "take 1 tablet by mouth twice a day",
//     brand_name: "Effexor",
//     medication_dose: "75 mg",
//     medication_description: "peach round-shaped tablet imprinted with TV in the front and 4 K on the back",
//     last_taken: "2000-01-01T00:00:25.000Z",
//     user_id: 1,
//     created_at: "2021-07-13T20:21:51.845Z",
//     updated_at: "2021-07-13T20:21:51.845Z"
//     },
//     {
//     id: 2,
//     name: "Alprazolam",
//     directions: "take 1 tablet by mouth once a day",
//     brand_name: "Xanax",
//     medication_dose: "0.5 mg",
//     medication_description: "peach oval-shaped tablet imprinted with 1 9 in the front and a Y on the back",
//     last_taken: "2000-01-01T00:00:25.000Z",
//     user_id: 1,
//     created_at: "2021-07-13T20:21:51.865Z",
//     updated_at: "2021-07-13T20:21:51.865Z"
//     }