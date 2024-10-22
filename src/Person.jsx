import { useState } from 'react';
import './App.css';

function Person() {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 100,
  });

  function handleFirstNameInput(e) {
    setPerson({ ...person, firstName: e.target.value });
  }

  function handleLastNameInput(e) {
    setPerson({ ...person, lastName: e.target.value });
  }

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  return (
    <>
      <Input
        label="First name"
        value={person.firstName}
        onChange={handleFirstNameInput}
      />
      <Input
        label="Last name"
        value={person.lastName}
        onChange={handleLastNameInput}
      />
      <h1>{person.firstName + ' ' + person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

function Input({ label, onChange, value }) {
  return (
    <label>
      {label}:{' '}
      <input type="text" value={value} name={value} onChange={onChange} />{' '}
    </label>
  );
}

export default Person;
