import React, { useState } from 'react';


const PersonForm = ({persons, setPersons, searchTerm, setSearchTerm}) => {
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const addContact = (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already registered. Please choose a different name.`);
    } else {
      const newObject = { name: newName, number: newNumber };
      setPersons(persons.concat(newObject));
      setNewName('');
      setNewNumber('');
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return(
    <div>
      <h2>Phonebook</h2>
      <div>
        Search: <input value={searchTerm} onChange={handleSearchChange} />
      </div>
      <form onSubmit={addContact}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

const Persons = ({persons, searchTerm}) => {
  const filteredPersons = persons.filter(
    (person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.number.includes(searchTerm)
  );

  return(
    <div>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, key) => (
          <li key={key}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  )

}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456-7890' },
    { name: 'Bob Johnson', number: '987-654-3210' },
    // Add more persons as needed
  ]);
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <div>
      <PersonForm persons = {persons} setPersons={setPersons} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Persons persons = {persons} searchTerm={searchTerm}/>
    </div>
  );
};

export default App;
