const app = new Vue (

    {
    
    el : "#app",

    data: { 
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
        removeTodoElement(todoIndex){
            if (this.todoList[todoIndex] != undefined){
                this.todoList.splice(todoIndex, 1)
            }
        },

    },
});