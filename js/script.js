const app = new Vue (

    {
    
    el : "#app",

    data: { 

        newTodoContent:"",
        
        
        todoList: [
            {
                text: "comprare fave di fuca",
                done: false,
            },
            {
                text: "lavare la testa al capo",
                done: true,
            },
            {
                text: "fare la barba al criceto",
                done: false,
            },
            {
                text: "rimbrottare un cactus",
                done: true,
            },
            {
                text: "spostare una candela",
                done: false,
            },
            {
                text: "imbiancare una parete senza stanza",
                done: true,
            },
        ]
        
    },
    
    methods: {

        addTodoElement(todoContent){
            
            if (todoContent.trim() != ""){
                const pushTodo = {
                    text: todoContent,
                    done: false,
                }
                this.todoList.push(pushTodo);
                this.newTodoContent =  "";
            }
        },
        
        removeTodoElement(todoIndex){
            
            if (this.todoList[todoIndex] != undefined){
                this.todoList.splice(todoIndex, 1)
            }
        },

        changeTodoStatus(todoIndex){
            
            if (this.todoList[todoIndex].done == true){
                document.getElementsByClassName('list-group-item')[todoIndex].classList.toggle('taskDone');
                document.getElementsByClassName('list-group-item')[todoIndex].classList.toggle('taskToDo');
                this.todoList[todoIndex].done == false;
            } else if (this.todoList[todoIndex].done == false){
                document.getElementsByClassName('list-group-item')[todoIndex].classList.toggle('taskDone');
                document.getElementsByClassName('list-group-item')[todoIndex].classList.toggle('taskToDo');
                this.todoList[todoIndex].done == true;
            }
        }
        
    },
});


