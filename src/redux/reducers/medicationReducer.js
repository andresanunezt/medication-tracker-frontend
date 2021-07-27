
export const medicationReducer =  (state = [], action)=> {
  
  console.log(action)
  console.log(action)
    switch(action.type){
  
        case "ADD_MEDICATIONS":
          return [...action.medications]

        case "ADD_NEW_MEDICATION":
console.log(state, action.medication)
            return [...state,action.medication]
         
         
         case "EDIT_MEDICATION":
          console.log('id:', action.medication.id)
          console.log('medication:', action.medication)
          let allMeds = [...state]

          console.log('allMeds:', allMeds)
         
          const num = allMeds.findIndex(medication => medication.id === action.medication.id );
          allMeds[num] = action.medication
         
          return   [...allMeds]       
 
         case "DELETE_MEDICATION":
          
         let restOfMeds = state.filter( (medication)=> medication !== action.medication )
          
         return [...restOfMeds]

                                 
        default: 
            return state
  
    }
  
  
  }

