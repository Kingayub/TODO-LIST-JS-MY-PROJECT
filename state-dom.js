let arr = [
    {
        text: "LEARN DOM API",
        done: true
    },
    {
        text: "LEARN REST API",
        done: false
    },
    {
        text: "LEARN REACT",
        done: true
    },
    {
        text: "LEARN TYPESCRIPT",
        done: true
    },
    {
        text: "LEARN REDUX",
        done: true
    },

]

//ВЫВОД ВСЕГО СПИСКА
const render = (arr) => {

    let div1 = document.getElementById("list")
    div1.innerHTML = ''
    for (item of arr) {
        let div = document.createElement('div')
        div.textContent = item.text
        div.className = 'item'
        div1.append(div)
    }
}
// render(arr)

// УДАЛЕНИЕ КОНКРЕТНОГО ЗАДАНИЯ И ВЫВОД ВСЕГО СПИСКА

const remove = (i) => {
    arr = arr.filter((el, index) => index !== i)
    render(arr)
}

const ArrTodo = [];
// ДОБАВЛЕНИЕ ЗАДАНИЯ И ВЫВОД ВСЕГО СПИСКА

const addTodo = (text) => {
    let div1 = document.getElementById("list")
    let div = document.createElement('div')
    let obj = {
        name: text,
        done: false
    }
    ArrTodo.push(obj)
    div.textContent = obj.name
    div.className = 'item'

    div1.append(div)
    console.log(ArrTodo)
    //ЧЕКБОКС

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.className = "cb"
    checkbox.checked = obj.done
    div.prepend(checkbox)

    //КНОПКА УДАЛИТЬ 
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "-"
    deleteBtn.className = "btn2"

    div.append(deleteBtn)
    // if (checkbox.checked == false) {
    //     div.classList.add('div-color')
    //     div.classList.toggle('div-color')
    // }
}
// addTodo()


//СЛУШШАТЕЛИ СОБЫТИЙ ДОБАВЛЕНИЯ И УДАЛЕНИЯ ТАСКИ

const handleSubmit = (e) => {
    let btn = document.querySelector(".btn")
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let input = document.querySelector('.input')
        let text = input.value
        addTodo(text)
        input.value = ''

        let deleteBtn = document.querySelector(".btn2")
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault()
            e.target.parentElement.remove()
        })


        let checkbox = document.querySelector('.cb')
        checkbox.addEventListener('change', (e) => {
            e.preventDefault()
            e.target.parentElement.classList.add('div-color')
        })

        // if (checkbox.checked === false) {
        //     div.classList.add('div-color')
        //     div.classList.toggle('div-color')
        // }
    })

}
handleSubmit()

// УДАЛЕНИЕ СРАБАТЫВАЕТ ТОЛЬКО ОДИН РАЗ




//ВЫДЕЛЕНИЕ ВЫПОЛНЕННЫХ ЗАДАНИЙ
const checkTodo = (index) => {

    ArrTodo[index].done = !ArrTodo[index].done
}
