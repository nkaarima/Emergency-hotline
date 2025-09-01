//Functionality of the heart icon
document.getElementById('heart-image').addEventListener('click',function(){

    let HeartCount=document.getElementById('heart-count');
    let HeartCountValue=parseInt(HeartCount.innerText);
    //console.log(HeartCountValue);
    HeartCountValue=HeartCountValue +1;
    HeartCount.innerText=HeartCountValue;


})