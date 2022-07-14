const input1=document.querySelector('#input');
const btn=document.querySelector('#add-btn');
const myList=document.querySelector('.list');
btn.addEventListener('click',()=>{
    if(input1.value!=""){
        const list=document.createElement('li');
        list.innerHTML=input1.value +'<button class="btn1"><i class="fas fa-check fa-trash"></i></button>';
        myList.appendChild(list);
        input1.value='';
        const button=document.querySelectorAll('.btn1');
        for(var i=0;i<button.length;i++)
        {
            button[i].onclick=function()
            {
                this.parentNode.remove();
            }
        }
    }
});
