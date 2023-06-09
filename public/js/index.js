

const deleteButton = document.querySelector('#eraseContact')
// const todoItem = document.querySelectorAll('span.not')
// const todoComplete = document.querySelectorAll('span.completed')


deleteButton.addEventListener('click', deleteContact)
const contactID = document.querySelector(".singleContactID").innerText;
console.log(contactID);
// Array.from(todoItem).forEach((el) => {
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el) => {
//     el.addEventListener('click', markIncomplete)
// })

async function deleteContact() {
    const contactID = document.querySelector(".singleContactID").innerText
    try {
        const res = await fetch('./delete', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'contactIdFromJSFile': contactID
            })
        })
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

// async function markComplete() {
//     const todoId = this.parentNode.dataset.id
//     try {
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     } catch (err) {
//         console.log(err)
//     }
// }

// async function markIncomplete() {
//     const todoId = this.parentNode.dataset.id
//     try {
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     } catch (err) {
//         console.log(err)
//     }
// }