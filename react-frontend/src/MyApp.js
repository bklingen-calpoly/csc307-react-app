import React from "react";
import Table from "./Table";
// import RedditExample from "./RedditExample";

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
    {
      name: "Alexa",
      job: "Baker",
    },
  ];

  return (
    <div className="container">
      <Table characterData={characters} />
      {/* <RedditExample subreddit="calpoly"/> */}
    </div>
  );
}

export default MyApp;
