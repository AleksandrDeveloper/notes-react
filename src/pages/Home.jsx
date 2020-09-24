import React from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";

export default function Home({}) {
  return (
    <>
      <Form />
      <hr/>
      <Notes notesArr={[1,2,3,4,5]} />
    </>
  );
}
