import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, juggler } from '@loopback/repository';
import { Todo, TodoList } from '../models';
import { TodoListRepository } from './todo-list.repository';
export declare class TodoRepository extends DefaultCrudRepository<Todo, typeof Todo.prototype.id> {
    protected todoListRepositoryGetter: Getter<TodoListRepository>;
    readonly todoList: BelongsToAccessor<TodoList, typeof Todo.prototype.id>;
    constructor(dataSource: juggler.DataSource, todoListRepositoryGetter: Getter<TodoListRepository>);
}
