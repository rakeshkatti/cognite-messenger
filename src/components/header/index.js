import React from "react";
import { HeaderContainer, AppName, User } from "./styled";

const Header = ({ thread, user, goHome }) => {
  const {
    picture: { medium: displayImageUrl },
    name,
  } = user;

  if (thread) {
    const { participants } = thread;
    const otherParticipants = participants.filter((p) => p.id !== user.id);

    //Handling only for one participant
    const { name, picture } = otherParticipants[0];

    return (
      <HeaderContainer>
        <AppName onClick={() => goHome()}>
          <User>
            {"←"} <img src={picture.thumbnail} alt={name.first} /> {name.first}{" "}
            {name.last}
          </User>
        </AppName>
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <AppName onClick={() => goHome()}>Messenger</AppName>
      <User>
        {name.first} {name.last}
        <img src={displayImageUrl} alt={`${name.first} ${name.last}`} />
      </User>
    </HeaderContainer>
  );
};

export default Header;
