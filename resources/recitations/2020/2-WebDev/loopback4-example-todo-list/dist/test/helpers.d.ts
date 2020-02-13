import { Todo, TodoList, TodoListImage } from '../src/models';
/**
 * Generate a complete Todo object for use with tests.
 * @param todo A partial (or complete) Todo object.
 */
export declare function givenTodo(todo?: Partial<Todo>): Todo;
/**
 * Generate a complete TodoList object for use with tests
 * @param todoList A partial (or complete) TodoList object.
 */
export declare function givenTodoList(todoList?: Partial<TodoList>): TodoList;
/**
 * Generate a complete TodoListImage object for use with tests.
 * @param todoListImage A partial (or complete) TodoListImage object.
 */
export declare function givenTodoListImage(todoListImage?: Partial<TodoListImage>): TodoListImage;
