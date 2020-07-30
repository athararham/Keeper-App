import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import Notes from "../notes";

function noteEntry(note){
  return ( <Note
   title={note.title}  
   content={note.content}
  />
  );
}

function App() {
  return (
    <div>
      <Header />
      {Notes.map(noteEntry)};
      <Footer />
    </div>
  );
}
export default App;
