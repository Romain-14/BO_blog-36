import { useState } from 'react';

function useLocalStorage(key) {
    const [storedDatas, setStoredDatas] = useState(getLocalStorage);

    function getLocalStorage() {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    function setDatas(newStoriesList) {
        setStoredDatas(newStoriesList);
        localStorage.setItem(key, JSON.stringify(newStoriesList));
    }


    return [storedDatas, setDatas];

}

export default useLocalStorage;