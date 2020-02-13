import { TodoListRepository } from '../repositories';
import { TodoListImage } from '../models';
export declare class TodoListImageController {
    protected todoListRepo: TodoListRepository;
    constructor(todoListRepo: TodoListRepository);
    create(id: number, image: TodoListImage): Promise<TodoListImage>;
    find(id: number): Promise<TodoListImage>;
}
