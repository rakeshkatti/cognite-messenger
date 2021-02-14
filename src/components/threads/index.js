import React from "react";
import { Thread, Name } from "./styled";

const Threads = ({ data, user, setCurrentThread }) => {
  return (
    <>
      {data.map((thread, i) => {
        const { participants, id } = thread;
        const otherParticipants = participants.filter((p) => p.id !== user.id);

        //Handling only for one participant
        const { name, picture } = otherParticipants[0];

        return (
          <Thread key={id} onClick={() => setCurrentThread(id)}>
            <img src={picture.large} alt={name.first} />
            <Name>
              {name.first} {name.last}
            </Name>
          </Thread>
        );
      })}
    </>
  );
};

export default Threads;
