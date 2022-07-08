import { useState } from "react";

export function useLocalStorage(name, defaultValue){
    const [item,setItem] = useState(defaultValue)
    
    if(!localStorage[name])localStorage[name]=JSON.stringify(item);
    const value = JSON.parse(localStorage[name])
    
    const saveItem = (newItem) => {
        localStorage[name]=JSON.stringify(newItem);
        setItem(newItem)
    }
    
    return [value,saveItem];
}
