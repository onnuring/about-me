const clouds = document.querySelectorAll('.cloud_wrap>a');
const body = document.querySelector('body');
const modalDiv = document.querySelector('.modal_wrap');
const modalBg = document.querySelector('.dim');
const modalCon = document.querySelector('.modal');
const content = document.querySelectorAll('.modal>div');
cloudsArray = Array.from(clouds);

cloudsArray.forEach((cloud,idx) => {
    
    cloud.addEventListener('click',function(){
        modalDiv.style.zIndex= 9;
        modalBg.style.zIndex=9;
        modalCon.style.animation='1s modalOpen forwards';
        content[idx].style.display="block";
        
        if(idx ===1){
            new TypeIt(content[idx],{
                startDelay:500,
                cursor:true,
            })
                .pause(200)
                .delete(4,{delay:1000})
                .type('INTP')
                .go();
        }else {
            new TypeIt(content[idx],{
                startDelay: 500,
                cursor: true,
            })
                .pause(200)
                .go();
        }
    })
    modalBg.addEventListener('click',function(e){
        e.preventDefault();
        modalDiv.style.zIndex= -9;
        modalBg.style.zIndex=-9;
        modalCon.style.animation='1s modalClose';
        content[idx].style.display="none"
    })
})

// modalBg.addEventListener('click', function(){
//     modalDiv.style.zIndex= -9;
//     modalBg.style.zIndex= -9;
//     for(let i=0; i<modalsArray.length; i++){
//         modalsArray[i].style.animation='1s modalClose'; 
//     }
    
// })