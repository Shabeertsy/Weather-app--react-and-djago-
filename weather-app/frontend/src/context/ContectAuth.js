import { createContext,useState,useEffect } from "react";




// create context and context data

export default DataContext = createContext();



export const DataProvider=({children})=>{




    const contextData={

    }

    return(
        <DataContext.provider value={contextData}>

        </DataContext.provider>
    )
}




