import { TodoItem } from '../../models/TodoItem';
import { SearchFilterPipe } from './search-filter.pipe';

describe('SearchPipe', () => {
  let pipe: SearchFilterPipe;
  let todoListItems: TodoItem[];
  beforeEach(() => {
    pipe = new SearchFilterPipe();
    todoListItems = [
      {
        id: 68,
        todolistId: 10,
        title: 'sdad',
        deadline: new Date('2021-06-22T22:00:00.000Z'),
        description: 'asdads',
        done: true
      },
      {
        id: 69,
        todolistId: 11,
        title: 'item 2',
        deadline: new Date('2021-06-22T22:00:00.000Z'),
        description: 'asdads',
        done: true
      },
      {
        id: 67,
        todolistId: 12,
        title: 'item 3',
        deadline: new Date('2021-06-22T22:00:00.000Z'),
        description: 'asdads',
        done: true
      }
    ];
  });

  it('should return empty array if no items given', () => {
    const items: TodoItem[] = [];

    const filtered = pipe.transform(items, 'item');
    expect(filtered.length).toBe(0);
  });

  it('should filter correctly', () => {
    const filtered = pipe.transform(todoListItems, 'item');
    expect(filtered.length).toBe(2);
  });
});
