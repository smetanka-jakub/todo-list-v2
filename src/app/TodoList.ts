import { TodoItem } from './TodoItem';
export interface TodoList {
    id: string;
    items: TodoItem[];
    topic: string;
}