var isMoving = true;

function setBackgroundMoving() {
    if(isMoving == true){

    setTimeout(function(){
         //setting background berjalan
         var bg = document.getElementById('main');
         bg.style.backgroundPositionY = (parseInt(bg.style.backgroundPositionY.replace('px'
         ,'') ) +1) + 'px';

         //UPDATE SCORE LURR
         document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML)+1;

    //panggil recursive setbakcgroundmoving
    setBackgroundMoving();

    },5);
}
}
// inisialisasi background berjalan nya
setBackgroundMoving();


//setting meteor
function setMeteorMoving(){
    var meteor = document.getElementById('meteor'),
    plane = document.getElementById('plane');

    setTimeout(function(){

        meteor.style.marginTop = (parseInt(meteor.style.marginTop.replace('px',''))+1)+'px';
        if(parseInt(meteor.style.marginTop.replace('px','')) > 500){
            meteor.style.marginLeft = (Math.floor(Math.random() * 250 )+50)+'px';
            meteor.style.marginTop = "-100px";
        }
        if(meteor.offsetTop + 56 >= plane.offsetTop &&
         meteor.offsetLeft + 50 >= plane.offsetLeft && 
         meteor.offsetTop +56 <= plane.offsetTop + 100 &&
         meteor.offsetLeft <=plane.offsetLeft + 50) {
            alert('Yahaha Kamu Game Over, Score kamu adalah :' + document.getElementById('score').innerHTML);
            isMoving = false;
            plane.setAttribute('class', 'freeze');
            meteor.setAttribute('class', 'freeze');
         }else{

         

    

        //untuk menggerakan lagi meteornya
        setMeteorMoving();
         }

    }, 1);
}

//inisialisasi meteor
setMeteorMoving();

window.addEventListener('keydown', function(e){

    var plane = document.getElementById('plane'),
    left =  parseInt(plane.style.marginLeft.replace('px','')),
    top =  parseInt(plane.style.marginTop.replace('px','')); 

    if (isMoving == true){
    if(e.keyCode == 37) {
        if(left > 0){
       plane.style.marginLeft =(left - 10) + 'px';
    }
}else if(e.keyCode == 38) {
        if(top > 0) {
       plane.style.marginTop =(top - 10) + 'px';
        }

        } else  if(e.keyCode == 39) {
        if(left < 340) {
       plane.style.marginLeft =(left + 10) + 'px';
    }

 } else  if(e.keyCode == 40) {
        if(top < 400){
       plane.style.marginTop =(top + 10) + 'px';
    }
}
}
});