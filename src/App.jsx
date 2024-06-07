import React, { useState } from 'react'
import './App.css'
import { useLog } from './useLog'
import { SlowComponent } from './SlowComponent';
import { DummyComponent } from './DummyComponent';
import { useCallback } from 'react';

const ItemList = (props) => {
  const { country, handleRemove } = props;
  useLog("Item list");
  return (
    <li>
      <span>{country}</span>
      <button onClick={() => handleRemove(country)}>Delete</button>
    </li>
  );
}

const List = React.memo((props) => {
  const { list, handleRemove } = props;
  useLog("List");
  return (
    <ul>
        {list?.map((country) => (
          <ItemList key={country} country={country} handleRemove={handleRemove}/>
        ))}
    </ul>
  );
});
List.displayName = "List";

const CreateCountry = (props) => {
  const [countriesList, setCountriesList] = useState(["Brazil"]);
  
  const handleAdd = useCallback((country) => {
    setCountriesList(old => [...old, country]);    
  }, [])

  const handleRemove = useCallback((name) => {
    setCountriesList(old => old.filter(curr => curr !== name));    
  },[]);
  
  useLog("Create country");
  return(
    <>
      <List list={countriesList} handleRemove={handleRemove} />
      <FormComp handleAdd={handleAdd} />
      {props.children}
    </>
  );
}

const FormComp = React.memo((props) => {
  const [country, setCountry] = useState("");
  const { handleAdd } = props;
  useLog("Form")
  return (
    <div>
      <input type="text" onChange={e => setCountry(e.target.value)} name="country-name"/>
      <button onClick={() => handleAdd(country)}>Add</button>
    </div>
  )
})
FormComp.displayName = "FormComp";

function App() {      
  useLog("app");
  return (
    <>      
      <CreateCountry>
        <SlowComponent name="Slow 1"/>
        <DummyComponent name="Dummy 1" />
      </CreateCountry>
    </>
  )
}

export default App
