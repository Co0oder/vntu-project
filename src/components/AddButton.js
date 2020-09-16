import React from "react";
import useSound from 'use-sound';
import bell from '../sounds/bell.mp3';

export function AddButton({value}){
    const [play] = useSound(bell);  
    return <button onClick={play}> {value} </button>
}

