// event bubbling

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });


// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// function deleteItem(){
//     console.log('delete item');
//     // idhr sirf ek pe click pe krne pe hi kaam kr rrha h mtlb cut button pe click kr rhe h toa isi pe kaam kr rha h or isi situation ko handle krne ke lia event delegation ka use krenge, or ek jagar pr use hota h event delegation jb hm dyanmic add krenge list me jaise kia the create elemtnt krke tb use hoga
// }

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    // console.log('delete-item');
    // console.log(e.target);
    // if(e.target.className == 'fa fa-remove'){
    //     console.log('delete item');
    // }

    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete item');
    // }isme problemn yhi h new class name aayega toa dikkat ho jyga so islia we will use classList instead of className

    if(e.target.parentElement.classList.contains('delete-item')){
            console.log('delete item');
            e.target.parentElement.parentElement.remove();
        }
}
