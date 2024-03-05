import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: 123456}]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    event.preventDefault();

    // Check if the name is already registered
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already registered. Please choose a different name.`);
    } else {
      const newObject = { name: newName, number : newNumber};
      setPersons(persons.concat(newObject));
      setNewName('');
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, key) => (
          <li key={key}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
