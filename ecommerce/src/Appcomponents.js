import React from 'react'
import { Mycomponent1 } from './components/Mycomponent1';
import { Mycomponent2 } from './components/Mycomponent2';
import MyClassCommponent1 from './components/MyClassCommponent1';
import MyClassComponent2 from './components/MyClassComponent2';

export const App = () => {
  return (
    <div>
      <Mycomponent1 />
      <Mycomponent2 />
      <MyClassCommponent1 />
      <MyClassComponent2 />
      Hi I am react
    </div>
  )
}
export default App;