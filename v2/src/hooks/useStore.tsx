import React, {createContext, useContext} from "react";
import {RootStore} from "../store/RootStore";

export const RootStoreContext = createContext<RootStore | null>(null)

// export const useStore = <T extends keyof typeof stores>(
//     store: T
// ): typeof stores[T] => React.useContext(storesContext)[store];

export const useStore = () => {
    const context = useContext(RootStoreContext);
    if (context === null) {
        throw new Error("You have forgotten to wrap your root component with RootStoreProvider");
    }
    return context;
};