/**
  This fix the first part, when you were typing the list were rerendering, in this part is not anymore.
 */

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
          <div key={country}>
            <li>
              <span>{country}</span>
              <button onClick={() => handleRemove(country)}>Delete</button>
            </li>
          </div>
        ))}
    </ul>
  );
});
List.displayName = "List";


function App() {
  const [countriesList, setCountriesList] = useState(["Brazil"]);
  const [country, setCountry] = useState("");
  useLog("App");


  const handleAdd = () => {
    setCountriesList(old => [...old, country]);
    setCountry('');
  }

  const handleRemove = useCallback((name) => {
    setCountriesList(old => old.filter(curr => curr === name));    
  }, []);
  
  useLog("app");
  return (
    <>
      <List list={countriesList} handleRemove={handleRemove}/>

      <div>
        <input type="text" onChange={e => setCountry(e.target.value)} name="country-name"/>
        <button onClick={handleAdd}>Add</button>
      </div>

      <SlowComponent name="Slow 1"/>
      <DummyComponent name="Dummy 1" />
    </>
  )
}

export default App
