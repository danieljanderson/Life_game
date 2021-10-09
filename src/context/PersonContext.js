import React, { createContext, useState } from 'react';
import Person from '../GameLogic/Person';

const PersonContext = createContext();
const newPerson = new Person();

function PersonProvider(props) {
  const [user, setUser] = useState(newPerson);
  return (
    <PersonContext.Provider value={{ user }}>
      {props.children}
    </PersonContext.Provider>
  );
}
export { PersonContext, PersonProvider };
