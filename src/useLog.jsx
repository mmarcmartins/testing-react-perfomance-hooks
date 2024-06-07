import { useEffect } from "react";

export const useLog = (name) => {

    useEffect(() => {
        console.log('rerendered', name);
    })

}