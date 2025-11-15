const buttonToClick = document.querySelector("#feth_todos");
const listToAdd = document.querySelector("#list");

const fetchToDos = () => {
  return fetch(`https://jsonplaceholder.typicode.com/todos`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};

buttonToClick.addEventListener("click", () => {
  fetchToDos().then((todos) => {
    console.log(todos)
    createMurkUp(todos)
  });
});

const createMurkUp = (todos) =>{
const murkUp = todos.map((todo) => {
      // console.log(todo)
      return `<li> ${todo.title}</li>`;
    }).join('')
    console.log(murkUp)
    listToAdd.innerHTML = murkUp
}

// buttonToClick.addEventListener("click" , fetchToDos) not right
