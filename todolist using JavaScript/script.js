update();

    add = document.getElementById('add');
  

    function update(){
      itemsJsonStr =localStorage.getItem('itemsJson');
      let tableBody = document.getElementById('tableBody');
      let content = "";
      if(itemsJsonStr == null){
        console.log("No todo's to do currently ")
      }
      else{

      itemsJsonArray = JSON.parse(itemsJsonStr);
      // Populate the table 

      itemsJsonArray.forEach((element, index) => {            
          content+= `
                <tr>
                <th scope="row">${index+1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button type="button" class="btn btn-primary" onclick = "deleted(${index})">Delete</button></td>
                
                </tr>
        `
      
      });
    }
    
    tableBody.innerHTML = content;    
    }

    function AddAndUpdate(){
      
      title = document.getElementById('title').value;
      desc = document.getElementById('desc').value;
      
      
      if(localStorage.getItem('itemsJson') == null){
        console.log("Updating List first time")
        itemsJsonArray = []
        itemsJsonArray.push([title,desc])
        localStorage.setItem( 'itemsJson', JSON.stringify(itemsJsonArray));
      }
      else {
        console.log("Updating List again")
        itemsJsonStr =localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonStr);
        itemsJsonArray.push([title,desc])
        localStorage.setItem( 'itemsJson', JSON.stringify(itemsJsonArray));
      }
    
       
      // Populate the table 
      update();
    
    }

    function deleted(itemIndex){
      itemsJsonStr =localStorage.getItem('itemsJson');
      itemsJsonArray = JSON.parse(itemsJsonStr);
      itemsJsonArray.splice(itemIndex,1)

      localStorage.setItem( 'itemsJson', JSON.stringify(itemsJsonArray));

      console.log(`deleted ${itemIndex}` )

     update();
    }

    function clearStorage(){

      if(confirm("Do you really want to clear?"))
      {
      console.log('clear the storage')
      localStorage.clear();
      update();
   
      }     
    }

  
  add.addEventListener("click" ,AddAndUpdate )
  
 
    
    