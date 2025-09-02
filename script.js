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
            
//Functionality of the call button
let Coin=document.getElementById('coin-amount');
let CoinAmount=parseInt(Coin.innerText);
let CallHistory= document.getElementById('call-history');


let CallButtons=document.getElementsByClassName('call-button');
for(let CallButton of CallButtons){
        CallButton.addEventListener('click',function(){
          //console.log(CallButton.parentElement)
        let card=CallButton.parentElement;
        let ServiceName=card.querySelector(".service-name").innerText;
        //console.log(SerViceName)

        let ServiceNum=card.querySelector(".service-num").innerText;

        alert('Calling'+' '+ ServiceName +' '+ ServiceNum);

         if(CoinAmount >20){
          CoinAmount=CoinAmount-20;
          Coin.innerText= CoinAmount;
        }

        else{
            alert("You don't have enough coins");
        }

        let CallRecord=document.createElement('div');
        CallRecord.classList.add('calls');
        CallRecord.style.marginBottom="3px";
        CallRecord.style.marginTop="5px";

        //Get current time

        let date= new Date();
        let localTime= date.toLocaleTimeString();
    
        CallRecord.innerText=ServiceName +' '+ ServiceNum +' '+ localTime;
        console.log(CallRecord.innerText);
        CallHistory.appendChild(CallRecord);

        

    })


}

//Clear Button

let Clear=document.getElementById('clear-button');
let Calls=document.getElementsByClassName('calls');
Clear.addEventListener('click',function(){
   for (call of Calls){
        call.style.display='none';
   }

})

//Copy Button work

let copyButtons=document.getElementsByClassName('copy-button');
let copyCount=document.getElementById('copy-value');
copyCountValue=parseInt(copyCount.innerText);

for(let copyButton of copyButtons){
     copyButton.addEventListener('click',function(){
       let card=copyButton.parentElement;
       let ServiceNum=card.querySelector(".service-num").innerText;
       //console.log(ServiceNum);
       copyCountValue= copyCountValue+1;
       copyCount.innerText=copyCountValue;
       navigator.clipboard.writeText(ServiceNum);
       alert(ServiceNum+ ' '+ 'has been copied');

     })
}
