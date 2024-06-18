export interface StateSchema { 
    noteData: noteSchema
}
export interface noteData{ 
    noteData:noteSchema[]
    
}
export interface noteSchema{ 
    id?: number; 
    noteTitle: string; 
    noteText: string; 
    noteBackgroundColor: string;
    
}