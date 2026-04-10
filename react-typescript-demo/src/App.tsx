import React from 'react';
import { Greet } from './component/Greet';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';
import { Status } from './component/Status';
import { Heading } from './component/Heading';
import { Oscar } from './component/Oscar';
import { Button } from './component/Button';
import { Input } from './component/Input';
import { Container } from './component/Container';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
    first: 'Chandra',
    last: 'Sharma'
  },
  {
    first: 'Vartika',
    last: 'Priyadarshni'
  },
  {
    first: 'Vrishank',
    last: 'Sharma'
  }
  ]
  return (
    <div className="App">
      <Greet name='Chandra' messageCount={10} isLoggedIn={false}/>
      <Person name= {personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder text </Heading>
      <Oscar>
        <Heading>Oscar goes to Chandra Sharma</Heading>
      </Oscar>

      <Button handleClick={(event, id) =>
        console.log("Button Clicked", event,id)
      }/>

      <Input value='Sharma' handleChnage={event => console.log()}></Input>

      <Container styles={{border: '1px solid black', padding: '1rem' }}></Container>
    </div>
  );
}

export default App;
