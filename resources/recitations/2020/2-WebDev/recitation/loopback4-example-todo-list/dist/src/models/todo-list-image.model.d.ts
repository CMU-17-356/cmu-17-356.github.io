import { Entity } from '@loopback/repository';
export declare class TodoListImage extends Entity {
    id: number;
    todoListId?: number;
    value: string;
    constructor(data?: Partial<TodoListImage>);
}
