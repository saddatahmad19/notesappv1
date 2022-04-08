export default class NotesAPI{
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");

        return notes.sort(a,b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        }
    }

    static saveNotes(noteToSave) {
        const notes = NotesAPI.getAllNotes();


        noteToSave.id = Math.floor(Math.random() * 10000000);
        noteToSave.updated = new Date().toISOString();
        notes.push(noteToSave);
        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
    }

    static deleteNote(id) {
        
    }

}