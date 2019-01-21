import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, juggler, HasOneRepositoryFactory } from '@loopback/repository';
import { Todo, TodoList, TodoListImage } from '../models';
import { TodoRepository } from './todo.repository';
import { TodoListImageRepository } from './todo-list-image.repository';
export declare class TodoListRepository extends DefaultCrudRepository<TodoList, typeof TodoList.prototype.id> {
    protected todoRepositoryGetter: Getter<TodoRepository>;
    protected todoListImageRepositoryGetter: Getter<TodoListImageRepository>;
    readonly todos: HasManyRepositoryFactory<Todo, typeof TodoList.prototype.id>;
    readonly image: HasOneRepositoryFactory<TodoListImage, typeof TodoList.prototype.id>;
    constructor(dataSource: juggler.DataSource, todoRepositoryGetter: Getter<TodoRepository>, todoListImageRepositoryGetter: Getter<TodoListImageRepository>);
    findByTitle(title: string): Promise<TodoList | null>;
}
