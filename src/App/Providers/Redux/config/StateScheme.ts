export interface StateSchema { 
    noteData: noteData
}
export interface noteData{ 
    noteData: noteSchema[],
    searchNote: noteSchema[]
    
}
export interface noteSchema{ 
    id?: string; 
    noteTitle: string; 
    noteText: string; 
    noteBackgroundColor?: string;
    
}