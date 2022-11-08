export interface Todo {
    id: string;
    desc: string;
    completed: boolean;
    title:string;
}

export interface TodoState {
    todoToEdit: Todo;
    edit:boolean;
    todos: Todo[];
}