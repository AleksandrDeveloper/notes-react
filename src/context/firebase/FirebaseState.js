import Axios from "axios";
import React, { useReducer } from "react";
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../type";
import FirebaseContext from "./FirebaseContext";
import  FirebaseReducer from "./FirebaseReducer";

export default ({ children }) => {
    
  const url = "https://react-hooks-6bb5e.firebaseio.com/";
  const initState = { notes: [], loading: false };

  const [state, dispatch] = useReducer(FirebaseReducer, initState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const fetchNotes = async () => {
    showLoader();
    const res = await Axios.get(`${url}/notes.json`);

    const payload = Object.keys(res.data).map((key) => {
      return {
        ...res.data[key],
        id: key,
      };
    });

    dispatch({ type: FETCH_NOTES, payload });
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
    };

    try {
      const res = await Axios.post(`${url}/notes.json`, note);
      const payload = {
        ...note,
        id: res.data.name,
      };

      dispatch({ type: ADD_NOTE, payload });
    } catch (e) {
      throw new Error(e.message);
    }
  };

  const removeNote = async (id) => {
    await Axios.delete(`${url}/notes/${id}.json`);

    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addNote,
        removeNote,
        fetchNotes,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
