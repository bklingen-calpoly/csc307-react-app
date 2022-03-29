import React from "react";
import Table from "./Table";

function MyApp() {
  const characters = [
    {
      name: "Charlie",
      job: "Janitor",
    },
    {
      name: "Mac",
      job: "Bouncer",
    },
    {
      name: "Dee",
      job: "Aspring actress",
    },
    {
      name: "Dennis",
      job: "Bartender",
    },
  ];

  return (
    <div className="container">
      <Table characterData={characters} />
    </div>
  );
}

export default MyApp;
