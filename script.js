console.log("testing")
async function logDogs() {
    try{
    const response = await fetch("https://dogapi.dog/api/v2/breeds").then((response)=>{
        return response.json()

    }).then((data)=>{
        console.log(data);
        data.data.forEach((current)=>{
   //         console.log(current)
           document.getElementById("dogList").append(current.attributes.name, "div")
           document.getElementById("dogList").append(current.attributes.name, "br")
        })
    })
    //const dogs = await response.json();
    }catch(error){
        console.error("fetcherror", error.message)
    }
  }
  logDogs();

  async function getBreedInfo() {
    try{
    const response = await fetch("https://dogapi.dog/api/v2/breeds/087979f3-1c45-4d8a-a153-462bf5ea379e").then((response)=>{
        return response.json()

    }).then((data)=>{
        console.log(data);
         //  document.getElementById("dogList").append(data.data, "div")     
    })
    //const dogs = await response.json();
    }catch(error){
        console.error("fetcherror", error.message)
    }
  }
  getBreedInfo()

  async function getDogFacts() {
    try{
    const response = await fetch("https://dogapi.dog/api/v2/facts").then((response)=>{
        return response.json()

    }).then((data)=>{
        console.log(data);  
    })
    //const dogs = await response.json();
    }catch(error){
        console.error("fetcherror", error.message)
    }
  }
  getDogFacts()

  async function getDogGroups() {
    try{
    const response = await fetch("https://dogapi.dog/api/v2/groups").then((response)=>{
        return response.json()

    }).then((data)=>{
        console.log(data);  
    })
    //const dogs = await response.json();
    }catch(error){
        console.error("fetcherror", error.message)
    }
  }
  getDogGroups()
  