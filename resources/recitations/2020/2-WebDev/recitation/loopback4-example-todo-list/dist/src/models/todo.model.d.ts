import { Entity } from '@loopback/repository';
export declare class Todo extends Entity {
    id?: number;
    title: string;
    desc?: string;
    isComplete: boolean;
    todoListId: number;
    getId(): number | undefined;
    constructor(data?: Partial<Todo>);
}
