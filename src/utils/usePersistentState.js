import { useEffect, useState } from "react";

export function usePersistentState(defaultValue, stateKey) {
    const [value, setValue ] = useState(() => {
        const persistentValue = window.localStorage.getItem(stateKey);

        return persistentValue !== null ? JSON.parse(persistentValue) : defaultValue;
    });

    useEffect(() => window.localStorage.setItem(stateKey, JSON.stringify(value)), [stateKey, value]);

    return [value, setValue];
}
