let count = 0;
let heading = document.querySelector('.tasbeh-heading')

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("dicrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
            heading.textContent = "Subhan'Allah"

        }

        if(count < 0){
            value.style.color = 'red'
        }
        if(count === 0){
            value.style.color = "black"
            value.style.backgroundColor = "white"
        }
        if(count === 33){
            heading.textContent = "Alhamdulillah"
            value.style.backgroundColor = "yellow"
            value.style.color = "red"
        }

        if(count === 66){
            heading.textContent = "Allohu Akbar"
            value.style.backgroundColor = "blue"
            value.style.color = "yellow"
        }
        if(count === 99){
            alert('Qabul Bolsin')
            heading.textContent = "Alhamdulillah"
            value.style.backgroundColor = "crimson"
            value.style.color = "white"
        }

        value.textContent = count;
    })
})


// Audio Sound


let sound = document.querySelector('.sound')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')

btn1.addEventListener('click', ()=> {
  sound.play()
})

btn2.addEventListener('click', ()=> {
    sound.play()
})

btn3.addEventListener('click', ()=> {
    sound.play()
})