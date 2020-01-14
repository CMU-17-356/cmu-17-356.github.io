import { Count, Filter, Where } from '@loopback/repository';
import { TodoList } from '../models';
import { TodoListRepository } from '../repositories';
export declare class TodoListController {
    todoListRepository: TodoListRepository;
    constructor(todoListRepository: TodoListRepository);
    create(obj: TodoList): Promise<TodoList>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<TodoList[]>;
    updateAll(obj: Partial<TodoList>, where?: Where): Promise<Count>;
    findById(id: number): Promise<TodoList>;
    updateById(id: number, obj: TodoList): Promise<void>;
    deleteById(id: number): Promise<void>;
}
