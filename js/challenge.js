let index, heartCounter=0, counter = document.getElementById('counter')

let addCounter = setInterval(notAnonymus, 1000)

let notAnonymus = () => {
    index = parseInt(counter.textContent);
    index +=1;
    counter.textContent = index;
}

document.getElementById('minus').addEventListener('click', function(){
    index = parseInt(counter.textContent);
    index -= 1;
    counter.textContent = index;
})

document.getElementById('plus').addEventListener('click', function(){
    index = parseInt(counter.textContent);
    index += 1;
    counter.textContent = index;
})

document.getElementById('heart').addEventListener('click', function(){
    let likes = document.querySelector('.likes')
    if(heartCounter == 0){
        let li = document.createElement('li')
        li.id = 'heart-counter'
        li.textContent = '❤️';
        likes.appendChild(li)
    }else{
        let updateLi = document.getElementById('heart-counter')
        updateLi.textContent = `❤️ ${heartCounter+1}`
    }
    heartCounter +=1;
})

document.getElementById('pause').addEventListener('click', function() {
    
    
    if(document.getElementById('pause').textContent == ' pause '){
        clearInterval(addCounter)
        document.getElementById('pause').textContent = ' resume ';
        document.getElementById('minus').disabled = true;
        document.getElementById('plus').disabled = true;
        document.getElementById('heart').disabled= true; 
    }else{
        addCounter = setInterval(notAnonymus, 1000)
        document.getElementById('pause').textContent = ' pause ';
        document.getElementById('minus').disabled = false;
        document.getElementById('plus').disabled = false;
        document.getElementById('heart').disabled= false;
    }
})

document.getElementById('comment-form').addEventListener('submit', function (event) {
    event.preventDefault()
    
    let list = document.getElementById('list')
    let h4 = document.createElement('h4')
    h4.textContent = event.target['comment-input'].value
    list.appendChild(h4)

    document.getElementById('comment-form').reset()
})