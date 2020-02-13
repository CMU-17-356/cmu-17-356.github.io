import { Entity } from '@loopback/repository';
import { Todo } from './todo.model';
import { TodoListImage } from './todo-list-image.model';
export declare class TodoList extends Entity {
    id?: number;
    title: string;
    color?: string;
    todos: Todo[];
    image: TodoListImage;
    constructor(data?: Partial<TodoList>);
}
