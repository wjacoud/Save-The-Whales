var currentImg=0
var imgArray=[];

imgArray[0]='Photos/baleiaazul2-cke.jpg';
imgArray[1]='Photos/baleiacachalote.jpg';
imgArray[2]='Photos/baleiadebryde.jpg';
imgArray[3]='Photos/baleiafin-cke.jpg';
imgArray[4]='Photos/baleiafranca-cke.jpg';
imgArray[5]='Photos/baleiajubaret-cke.jpg';
imgArray[6]='Photos/baleiaminke-cke.jpg';
imgArray[7]='Photos/baleiaorca-cke.jpg';
imgArray[8]='Photos/Equipa1.jpg';
imgArray[9]='Photos/Equipa2.jpg';
imgArray[10]='Photos/Equipa3.jpg';
imgArray[11]='Photos/Equipa4.jpg';
imgArray[12]='Photos/Equipa5.jpg';
imgArray[13]='Photos/Equipa6.jpg';
imgArray[14]='Photos/Equipa7.jpg';
imgArray[15]='Photos/Equipa8.jpg';
imgArray[16]='Photos/EquipaCel1.jpeg';
imgArray[17]='Photos/EquipaPB1.png';
imgArray[18]='Photos/hySci.jpg';
imgArray[19]='Photos/jpn.jpg';
imgArray[20]='Photos/nicaragua-beached-whale-752x501.jpg';
imgArray[21]='Photos/omura.png';
imgArray[22]='Photos/rescue1.jpg';
imgArray[23]='Photos/rescue2.jpg';
imgArray[24]='Photos/rescue3.jpg';
imgArray[25]='Photos/rescue4.jpg';
imgArray[26]='Photos/rescue5.jpg';
imgArray[27]='Photos/rescue6.jpg';
imgArray[28]='Photos/rescue7.jpg';
imgArray[29]='Photos/whale saves human.jpg';
imgArray[30]='Photos/whale-1.jpg';
imgArray[31]='Photos/whale-4.jpg';
imgArray[32]='Photos/whale-5.jpeg';
imgArray[33]='Photos/whale-9.jpg';


function init(){
    currentImg=0
    document.querySelector(".img-display").setAttribute("src",imgArray[0]);
};


document.querySelector('#btn-next').addEventListener('click',function(){
    currentImg==imgArray.length-1?currentImg=0:currentImg++;
    document.querySelector('.img-display').setAttribute('src',imgArray[currentImg]);
})

document.querySelector('#btn-back').addEventListener('click',function(){
    currentImg==0?currentImg=imgArray.length-1:currentImg--;
    document.querySelector('.img-display').setAttribute('src',imgArray[currentImg]);
})

setInterval(function(){
    currentImg==imgArray.length-1?currentImg=0:currentImg++;
    document.querySelector('.img-display').setAttribute('src',imgArray[currentImg]);
},2000);

document.querySelector('.sexo').addEventListener('click',function () {
    document.querySelector('.sexo').value='default text';   
})

function openSlideMenu(){
    document.getElementById('slide-nav').style.width = '250px';
}
function closeSlideMenu(){
    document.getElementById('slide-nav').style.width = '0';
}
