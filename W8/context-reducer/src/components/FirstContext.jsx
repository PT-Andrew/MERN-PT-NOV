import { createContext,useState } from "react";

// create new context object
export const firstContext = createContext()

export const FirstProvider = (props) => {

    const [state,setState] = useState('message from context')

    return(
        <firstContext.Provider value={{
            state,
            setState
          }}>
            {props.children}
        </firstContext.Provider>
    )
}