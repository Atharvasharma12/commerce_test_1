import React , { createContext} from 'react'
import Header from './Header';

const name = createContext("atharva sharma");
// const iam = createContext("atharva sharma");


// function NameContext() {
//   return (
//     <name.Provider value  = {"atharva sharma"}>
//         <Header/>
//     </name.Provider>
//   )
// }

export  {name }