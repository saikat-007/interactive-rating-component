var btns = document.querySelectorAll('.btn-container');
var card2 = document.querySelector('.card-2');
var card = document.querySelector('.card');
let span = document.querySelector('span')
let sbmt_btn = document.querySelector('.submit-btn')
console.log(card2);

let rating;
Array.from(btns).forEach(btn=>{
    btn.addEventListener('click',e=>
    {
        console.log(e.target);
        let x = (e.target);
        x.classList.add('pressed');
        rating = e.target.textContent;
    })
})

sbmt_btn.addEventListener('click',function(){
    span.textContent = rating;
    card2.classList.remove('hide');
    card.classList.add('hide');
})

