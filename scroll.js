// home text flow
const pTag1 = document.querySelector('.first-parallel')
const pTag2 = document.querySelector('.second-parallel')

const textArr1 = 'Hello! This is Onnuri Kim. Nice to meet you :)'.split(' ')
const textArr2 = 'You can scroll down if you want to see more.'.split(' ')

//흐르게 만들기위한 변수
let count1 = 0
let count2 = 0

initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)

function initTexts(element, textArray) {
    textArray.push(...textArray)
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
    }
}

function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = `translateX(0)`
        count = 0
    }
    element.style.transform = `translateX(${direction * count}px)`
    
    return count;
}
// translate 처리

function animate() {
    
    count1++
    count2++

    count1 = marqueeText(count1, pTag1, -1)
    count2 = marqueeText(count2, pTag2, 1)


    window.requestAnimationFrame(animate);
}



function scrollHandler() {
    count1 += 5
    count2 += 5
}

window.addEventListener('scroll', scrollHandler)
animate();