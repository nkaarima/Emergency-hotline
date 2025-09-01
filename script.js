//Functionality of the heart icon

    let HeartIcons=document.getElementsByClassName('fa-regular fa-heart');
    let HeartCount=document.getElementById('heart-count');

    //console.log(HeartIcons);
    for(let HeartIcon of HeartIcons){
          HeartIcon.addEventListener('click',function(){
              let HeartCountValue=parseInt(HeartCount.innerText);
              HeartCountValue=HeartCountValue+1;
              HeartCount.innerText=HeartCountValue;    
        
      })

      }  
            
