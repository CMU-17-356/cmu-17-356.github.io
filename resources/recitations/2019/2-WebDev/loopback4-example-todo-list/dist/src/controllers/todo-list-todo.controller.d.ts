import { Count, Filter, Where } from '@loopback/repository';
import { Todo } from '../models';
import { TodoListRepository } from '../repositories';
export declare class TodoListTodoController {
    protected todoListRepo: TodoListRepository;
    constructor(todoListRepo: TodoListRepository);
    create(id: number, todo: Todo): Promise<Todo>;
    find(id: number, filter?: Filter): Promise<Todo[]>;
    patch(id: number, todo: Partial<Todo>, where?: Where): Promise<Count>;
    delete(id: number, where?: Where): Promise<Count>;
}
