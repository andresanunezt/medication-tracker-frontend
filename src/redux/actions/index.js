export const fetchAllMeds =()=>{

    return (dispatch)=>{
  
        fetch('http://localhost:3000/medications')
        .then(resp => resp.json())
        .then(medications => {  console.log(medications)  
  
            dispatch({ type: "ADD_MEDICATIONS", medications: medications })
           
        })
  
    }
  
  }