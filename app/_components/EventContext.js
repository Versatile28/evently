"use client"

import { createContext, useContext, useState } from "react";

const EventContext = createContext();

const initialState = { from: undefined, to: undefined };

function EventProvider({ children }){
   const[range, setRange] = useState(initialState);
   const resetRange = ()=>setRange(initialState)

   return <EventContext.Provider value={{range, setRange, resetRange}}>
      {children}
   </EventContext.Provider>
}

function useEvent(){
   const context = useContext(EventContext)
   if(context === undefined)
      throw new Error("Context was used outside provider");
   return context;
}

export { EventProvider, useEvent };