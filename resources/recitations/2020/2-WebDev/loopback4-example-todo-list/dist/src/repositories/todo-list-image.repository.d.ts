import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { TodoListImage, TodoList } from '../models';
import { DbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { TodoListRepository } from './todo-list.repository';
export declare class TodoListImageRepository extends DefaultCrudRepository<TodoListImage, typeof TodoListImage.prototype.id> {
    protected todoListRepositoryGetter: Getter<TodoListRepository>;
    readonly todoList: BelongsToAccessor<TodoList, typeof TodoListImage.prototype.id>;
    constructor(dataSource: DbDataSource, todoListRepositoryGetter: Getter<TodoListRepository>);
}
