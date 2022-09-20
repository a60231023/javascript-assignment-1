const items = document.querySelector('#SIvCob');
for (let i = 0; i < items.children.length; i++){
    if (i%2 === 0){
        items.children[i].remove()
    }}