import { createContext, useContext, useState, useEffect } from "react";

export const BasketContext = createContext({});

function BasketProvider({ children }) {
    const [screenCountBasket, setScreenCountBasket] = useState([]);
    const [screenGoalBasket, setScreenGoalBasket] = useState([]);
    const [screenToDoBasket, setScreenToDoBasket] = useState([]);

    function addToBasket(item) {
        if(item.type === "countList" && item.name) {
            const existingItemIndex = screenCountBasket.findIndex(basketItem => basketItem.name === item.name);
            
            if (existingItemIndex !== -1) {
                if (item.quantity === 0 && screenCountBasket[existingItemIndex].quantity >= 1) {
                    if(confirm("tem cetrza que deseja remover o item da lista?")) { screenCountBasket.splice(existingItemIndex, 1)} else {location.reload()};
                } else {
                    screenCountBasket[existingItemIndex].quantity = item.quantity;
                }
            } else {
                if (item.quantity >= 0) {
                    screenCountBasket.push(item);
                }
            }
            
            localStorage.setItem('@listify:countList', JSON.stringify(screenCountBasket));
            setScreenCountBasket([...screenCountBasket]);
        }
        
        if(item.type === "goalList") {
            const existingItemIndex = screenGoalBasket.findIndex(basketItem => basketItem.type === "goalList" && basketItem.name === item.name);
            
            if (existingItemIndex !== -1) {
                if (item.quantity === 0 && screenGoalBasket[existingItemIndex].quantity >= 1) {
                    if(confirm("tem cetrza que deseja remover o item da lista?")) { screenGoalBasket.splice(existingItemIndex, 1)} else {location.reload()};
                } else {
                    screenGoalBasket[existingItemIndex].quantity = item.quantity;
                }
            } else {
                if (item.quantity >= 0) {
                    screenGoalBasket.push(item);
                }
            }
            
            localStorage.setItem('@listify:goalList', JSON.stringify(screenGoalBasket));
            setScreenGoalBasket([...screenGoalBasket]);
        }

        if (item.type === "toDo" && item.name) {
            const existingItemIndex = screenToDoBasket.findIndex(basketItem => basketItem.name === item.name);
            
            if (existingItemIndex !== -1) {
                screenToDoBasket[existingItemIndex].complited = item.complited;
            } else {
                screenToDoBasket.push(item);
            }
    
            localStorage.setItem('@listify:toDotList', JSON.stringify(screenToDoBasket));
            setScreenToDoBasket([...screenToDoBasket]);
        }
    }

    function deleteTodoIten(item) {
        const existingItemIndex = screenToDoBasket.findIndex(basketItem => basketItem.name === item.name);
        screenToDoBasket.splice(existingItemIndex, 1);
        localStorage.setItem('@listify:toDotList', JSON.stringify(screenToDoBasket));
        setScreenToDoBasket([...screenToDoBasket]);
    }
    
    useEffect(() => {
        let toDoItenBasket = JSON.parse(localStorage.getItem("@listify:toDotList")) || [];
        let goalItenBasket = JSON.parse(localStorage.getItem("@listify:goalList")) || [];
        let countItenBasket = JSON.parse(localStorage.getItem("@listify:countList")) || [];


        if (!countItenBasket || !Array.isArray(countItenBasket)) {
            countItenBasket = [];
            localStorage.setItem('@listify:countList', JSON.stringify(countItenBasket));
        }
        setScreenCountBasket(countItenBasket);

        if (!goalItenBasket || !Array.isArray(goalItenBasket)) {
            goalItenBasket = [];
            localStorage.setItem('@listify:goalList', JSON.stringify(goalItenBasket));
        }
        setScreenGoalBasket(goalItenBasket);

        if (!toDoItenBasket || !Array.isArray(toDoItenBasket)) {
            toDoItenBasket = [];
            localStorage.setItem('@listify:toDoList', JSON.stringify(toDoItenBasket));
        }
        setScreenToDoBasket(toDoItenBasket);
    }, []);
    
    return (
        <BasketContext.Provider value={{ addToBasket, deleteTodoIten, screenCountBasket, screenGoalBasket, screenToDoBasket }}>
            {children}
        </BasketContext.Provider>
    );
}


function useBasket() {
    const context = useContext(BasketContext);
    return context
}

export { BasketProvider, useBasket };