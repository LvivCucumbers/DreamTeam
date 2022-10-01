import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';
import { useEffect } from 'react';
const People = lazy(() => import('../pages/People'));
const Planets = lazy(() => import('../pages/Planets'));
const Startships = lazy(() => import('../pages/Starships'));

export const App = () => {


  useEffect(() => {
    console.log('wtf')
}, []);
  return (
    <>
     <Routes>
      <Route path="./" element={ <SharedLayout />} >
        <Route index element= { <People />} />
        <Route path="planets" element={<Planets />} />
        <Route path="startships" element={<Startships />} />
      </Route>
    </Routes></>
   
  );
};

export default App;
