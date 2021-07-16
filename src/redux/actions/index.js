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
  
            dispatch({ type: "ADD_NEW_MEDICATION", medication: medication })
           
        })
  
    }
  
   // return
    //     type: "ADD_NEW_MEDICATION", medications: medications

    // }

}



export const editMedication =(editMedication)=>{

    console.log(deleteMedication)

    return (dispatch)=>{

        fetch(`http://localhost:3000/medications/${editMedication.id}`,{
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editMedication),
            })
        .then(resp => resp.json())
        .then(medication => {    
  
            dispatch({ type: "EDIT_MEDICATION", medication: medication })
           
        })
  
    }

}


export const deleteMedication =(deleteMedication)=>{

    console.log(deleteMedication)

    return (dispatch)=>{

        fetch(`http://localhost:3000/medications/${deleteMedication.id}`,{
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
            
            })
        .then(resp => console.log(resp.text()))
        .then(medication => {  console.log(deleteMedication)  
  
            dispatch({ type: "DELETE_MEDICATION", medication: deleteMedication })
           
        })
  
    }
    
    
    // return{

    //     type: "DELETE_MEDICATION", medication: deleteMedication

    // }

}