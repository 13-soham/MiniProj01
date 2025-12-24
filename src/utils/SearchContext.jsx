import React, { createContext, useContext, useState } from 'react'
export const SearchQueryContext = createContext();

const SearchContext = ({children}) => {
    const [Query, setQuery] = useState("");
  return (
    <SearchQueryContext.Provider value={{Query, setQuery}}>
        {children}
    </SearchQueryContext.Provider>
  )
}

export default SearchContext;