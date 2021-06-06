import { TodoItem } from './TodoItem';
export interface TodoList {
    id: number;
    title: string;
    items: TodoItem[];
}