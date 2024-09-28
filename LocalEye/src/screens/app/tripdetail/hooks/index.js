import { useState } from "react"

export function useHooks() {

    const [accepted, setAccepted] = useState(false)
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };
  

    return { accepted, setAccepted,isChecked,
        toggleCheckbox }

 
    
    
}