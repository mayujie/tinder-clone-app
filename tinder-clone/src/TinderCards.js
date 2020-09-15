import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios";

function TinderCards() {
  // initialize with empty array
  const [people, setPeople] = useState([]);

  //   const [people, setPeople] = useState([
  //     {
  //       name: "Elon Musk",
  //       url:
  //         "https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
  //     },
  //     {
  //       name: "Jeff Bezoz",
  //       url:
  //         "https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
  //     },
  //   ]);

  //   when tinder cards component loads it will run this piece code once, and not run it again
  // add var to bottom bracket, whenever var name changes it's actually gonna refile this code
  useEffect(() => {
    async function fetchData() {
      // cuz base url already set up in axios.js
      const req = await axios.get("/tinder/cards");

      // whatever the request.data comes back us
      setPeople(req.data);
    }

    fetchData();
  }, []);

  //   console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            noSwipe={(dir) => swiped(dir, person.name)}
            noCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
