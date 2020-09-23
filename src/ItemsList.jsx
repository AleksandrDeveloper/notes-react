import React, { useEffect, useState } from 'react'

export default function ItemsList({getItems}) {
    const [items,setItems] = useState([])

    useEffect(()=>{

        console.log('__________________________________________________');
        const newItems = getItems()
        setItems(newItems) 
    },[getItems])
    return(
        <ul>
            {items.map((item,i)=>{
                return(
                    <li key={i}>{item}</li>
                )
            })}
        </ul>
    )
};
