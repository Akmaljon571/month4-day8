import ismArray from './data.js'
import { ol, btn, ismInput, famInput, sinf, check   } from './let.js'

let storage = window.localStorage;
let royxatlar = storage.getItem('ism')
let data = royxatlar ? JSON.parse(royxatlar) : ismArray




function play(ism,fam,guruh,jins){
    
    let li = document.createElement('li')
    li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-start')
    
    let  div = document.createElement('div')
    div.setAttribute('class', 'ms-2 me-auto')
    
    let h5 = document.createElement('h5')
    h5.setAttribute('class', 'fw-bold')
    h5.textContent = ism + ' ';
    h5.textContent += fam;
    
    let p = document.createElement('p')
    p.textContent = guruh;
    
    let span = document.createElement('span')
    span.textContent = jins;
    
    div.append(h5)
    div.append(p)
    li.append(div)
    li.append(span)
    
    return li
}

function inport() {
    if(ismInput.value == '' ||  famInput.value == ''|| sinf.value == ''){
        alert('royxatni toldiring')
        return
    } 
    return {
        ism: ismInput.value,
        fam: famInput.value,
        guruh: sinf.value,
        jins: check.value, 
    }
}

btn.addEventListener('click', ()=>{  
    let inp = inport()
    data.push(inp)

    storage.setItem('ism', JSON.stringify(data))
 
    let lisitem = play(inp.ism,inp.fam,inp.guruh,inp.jins)
    ol.prepend(lisitem)
    console.log(data);
    ismInput.value = '';
    famInput.value = '';
    sinf.value = '';
})

JSON.parse(storage.getItem('ism')).forEach(ism => {
    let lisitem = play(ism.ism,ism.fam,ism.guruh,ism.jins)
    ol.prepend(lisitem)
})





// inputdan malumot olish
// uni objectga push qilish
// objectdan malumotlarni erkanga chiqarish
// objectni bazaga saqlash
// bazadan ekranga saqlash
// inputlarni togirlash





    





