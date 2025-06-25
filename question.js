console.log('ALLAH HU AKBAR');


//using Selector inside the element
const boxes = document.querySelectorAll('.box_1')
console.log(boxes);
boxes.forEach(function(box)
{

    const btn = box.querySelector('.question-btn')
    // console.log(btn);
        btn.addEventListener('click',()=>
    {
        box.classList.toggle('show_text')
        boxes.forEach((item)=>
        {
        if(item !== box)
        {
            item.classList.remove('show_text')
        }
        })
        
    })

})

