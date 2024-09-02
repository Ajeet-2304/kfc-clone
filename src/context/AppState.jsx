import React from 'react';
import AppContext from './AppContext';

const AppState = ({children})=>{
    const state = {

    }
    return(
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState;