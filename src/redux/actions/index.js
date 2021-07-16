export const fetchAllMeds =()=>{

    return (dispatch)=>{
  
        fetch('http://localhost:3000/medications')
        .then(resp => resp.json())
        .then(medications => {  console.log(medications)  
  
            dispatch({ type: "ADD_MEDICATIONS", medications: medications })
           
        })
  
    }
  
  }


  export const addNewMedication =(medications)=>{


    console.log(medications)
    console.log(JSON.stringify(medications))
    return (dispatch)=>{

        fetch('http://localhost:3000/medications',{
        
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(medications),
          
          })
        .then(resp => resp.json())
        .then(medication => {  console.log(medication)  
  
            dispatch({ type: "ADD_NEW_MEDICATION", medications: medication })
           
        })
  
    }
  
   
   
    // return{

    //     type: "ADD_NEW_MEDICATION", medications: medications

    // }

}


export const deleteMedication =(deleteMedication)=>{

    return{

        type: "DELETE_MEDICATION", medication: deleteMedication

    }

}