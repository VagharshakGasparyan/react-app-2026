import heroImg from "../assets/hero.png";
import {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../store/counterSlice';

export default function Home({a: a1}) {
    const [count, setCount] = useState(0)
    const changeCount = () => {
        setCount(count + 1);
    }
    const r_count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return <>
        <h1 className={"my-h1"}>Home page {a1}</h1>
        <img src={heroImg} className="base" width="170" height="179" alt="hero"/>
        <button onClick={changeCount}>{count}</button>
        <button onClick={()=>{
            dispatch(increment());
        }}>{r_count}</button>
    </>;
}