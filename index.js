//----------------------Cocktails-------------------------//
//Use a Function to fetch data from the Url //
  async function logJSONData() {
    const response = 
    await fetch("http://localhost:3000/drinks");
    const jsonData = await response.json();
    return jsonData
  }
 // Use a function to display the images and retrieve data from the server//
 // using an array that is added to the container part//
  displayImages()
  async function displayImages(){
    const container= document.getElementById('container')
    const data = await logJSONData()
        console.log(data);
  // use forEach to ensure each item has been created for html content//      
    data.forEach((drink)=>{
        let html=`
        <div class="content">
        <img src="${drink.strDrinkThumb}" alt="">
        <div class="links">
        <p>${drink.likes}</p>
        <button onclick="updateLikes(${drink.id}, ${drink.likes})">Like</button>
      </div>
       </div>
        `
   //Adding the html into the container//     
        container.innerHTML += html
    })

  }
//Function to update the number of likes for each image//
  async function updateLikes(id,likes){
    await fetch(`http://localhost:3000/drinks/${id}`, 
    {
 //Patch used from Thunder client to ask server to update the likes //     
        method: "PATCH",
        body: JSON.stringify({likes:likes+1}),
        headers: {
            "Content-Type": "application/json",
          },
    })
  }
  




