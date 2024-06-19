export interface StateSchema {
    noteData: noteData; // Исправленный тип StateSchema
    todoData:todoData
  }
  
  export interface noteData {
    noteData: noteSchema[];
    searchNote: noteSchema[];
  }
  export interface todoData {
    todoData: todoSchema[];
    searchTodo: todoSchema[];
  }
  export interface noteSchema {
    id?: string;
    noteTitle?: string;
    noteText?: string;
    noteBackgroundColor?: string;
  }
  
  export interface todoSchema {
    id?: string;
    todoTitle?: string;
    todoPoint?: [
      todoText: string
    ];
    todoBackgroundColor?: string;
  }