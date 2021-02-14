import { useState } from "react";
import Header from "./components/header";
import Threads from "./components/threads";
import MessageList from "./components/message-list";
import { Container } from "./styled";

//Dummy Data
import loggedInUser from "./data/loggedinUser.json";
import messages from "./data/messages.json";

const App = () => {
  const [currentThread, setCurrentThread] = useState();
  const goHome = () => setCurrentThread("");
  const thread = messages.threads.find((thread) => thread.id === currentThread);
  return (
    <>
      <Header thread={thread} goHome={goHome} user={loggedInUser} />
      <Container>
        {currentThread ? (
          <MessageList data={thread} user={loggedInUser} />
        ) : (
          <Threads
            data={messages.threads}
            user={loggedInUser}
            setCurrentThread={setCurrentThread}
          />
        )}
      </Container>
    </>
  );
};

export default App;
