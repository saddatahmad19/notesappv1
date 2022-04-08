import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNotes ({
    title:"New Note 1!"
    body: "I am the first note!"
})

console.log(NotesAPI.getAllNotes());