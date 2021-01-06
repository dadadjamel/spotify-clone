import React, { createContext, useContext, useReducer } from 'react';

export const dataLayercontext = createContext()

export const DataLayer = ({initialState,reducer, children}) => (
    <dataLayercontext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </dataLayercontext.Provider>
)

export const useDatalayerValue = () => useContext(dataLayercontext)