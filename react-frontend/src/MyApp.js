import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Table from "./Table";
import Form from "./Form";
import axios from "axios";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  function removeOneCharacter(index) {
    const person = characters[index].id;
    makeDeleteCall(person).then((result) => {
      if (result.status === 204) {
        const updated = characters.filter((character, i) => {
          return i !== index;
        });
        setCharacters(updated);
      }
    });
  }

  function updateList(person) {
    makePostCall(person).then((result) => {
      if (result && result.status === 201)
        setCharacters([...characters, result.data]);
      console.log(result);
    });
  }

  useEffect(() => {
    fetchAll().then((result) => {
      if (result) setCharacters(result);
      console.log(characters);
    });
  }, []);

  async function fetchAll() {
    try {
      const response = await axios.get("http://localhost:5000/users");
      return response.data.users_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  async function makePostCall(person) {
    try {
      const response = await axios.post("http://localhost:5000/users", person);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function makeDeleteCall(id) {
    try {
      const response = await axios.delete("http://localhost:5000/users/" + id);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    // This is what we had before:
    // <div className="container">
    //   <Table characterData={characters} removeCharacter={removeOneCharacter} />
    //   <Form handleSubmit={updateList} />
    // </div>
    <div className="container">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/users-table">List all</Link>
            </li>
            <li>
              <Link to="/form">Insert one</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Choose your path!</h1>} />
          <Route
            path="/users-table"
            element={
              <Table
                characterData={characters}
                removeCharacter={removeOneCharacter}
              />
            }
          />
          <Route path="/form" element={<Form handleSubmit={updateList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyApp;
