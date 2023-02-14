// Incremental site rendering
import { useEffect, useState } from "react";

export default function ServerSideRenderd({ state }) {
    return (
        <>
            {state.map((e) => (
                <h2 key={e.id}>{e.name}</h2>
            
            ))}
        </>)
}

export async function getStaticProps() {
    const res = await fetch('https://63e014158b24964ae0f92fa7.mockapi.io/names/names');
    const state = await res.json();

    return {
        props: {
            state, //will be passed to the page component as props
        },
      
        revalidate : 100,

        
    };
}

