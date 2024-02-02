import './App.css';
import { useState } from 'react';

function App() {

    let [st, setst] = useState(" ");
    let [v1, setv1] = useState(" ");
    let [sig, setsig] = useState(" ");

    let cal = () => {
        setv1(st);
        setst(" ");
    }

    let ans = () => {
        if (sig == "/") {
            if(parseInt(st)==0)
            {
                setst("cannot divided by zero ")
            }
            else
            {
                setst(parseInt(v1) / parseInt(st));
            }
        }
        else if (sig == "*") {
            setst(parseInt(v1) * parseInt(st));
        }
        else if (sig == "+") {
            setst(parseInt(v1) + parseInt(st));
        }
        else if(sig == "-"){
            setst(parseInt(v1) - parseInt(st));
        }
        else if(sig == "%"){
            setst(parseInt(v1) % parseInt(st));
        }
    }
    let clr = () =>{
        setst(" ");
        setv1(" ");
    }


    return (
        <div className="App">
            <>
                <div className='calculator pad'>
                    <div className="screan">
                        <input type='text' value={st}></input>
                    </div>
                    <div className="button">
                        <div className="layear-1">
                            <input type='button' className='fn1' value={"AC"} onClick={clr}></input>
                            <input type='button' className='fn1' value={"C"}></input>
                            <input type='button' className='fn1' value={"%"}  onClick={(e) => {
                                cal()
                                setsig("%");
                            }}></input>
                            <input type='button' className='fn' value={"/"} onClick={(e) => {
                                cal()
                                setsig("/");
                            }}></input>
                        </div>
                        <div className="layear-1">
                            <input type="button" value={"7"} onClick={(e) => { setst(st + e.target.value) }}></input>
                            <input type="button" value={"8"} onClick={(e) => { setst(st + e.target.value) }}></input>
                            <input type="button" value={"9"} onClick={(e) => { setst(st + e.target.value) }}></input>
                            <input type="button" className='fn' value={"*"} onClick={(e) => {
                                cal()
                                setsig("*");
                            }}></input>
                        </div>
                        <div className="layear-1">
                            <input type='button' value={"4"} onClick={(e) => { setst(st + e.target.value) }}></input>
                            <input type='button' value={"5"} onClick={(e) => { setst(st + e.target.value) }}></input>
                            <input type='button' value={"6"} onClick={(e) => { setst(st + e.target.value) }}></input>
                            <input type='button' className='fn' value={"-"} onClick={(e) => {
                                cal()
                                setsig("-");
                            }}></input>
                        </div>
                        <div className="layear-1">
                            <input type='button' value={"1"} onClick={(e) => { setst(st + e.target.value) }}></input>
                            <input type='button' value={"2"} onClick={(e) => { setst(st + e.target.value) }}></input>
                            <input type='button' value={"3"} onClick={(e) => { setst(st + e.target.value) }}></input>
                            <input type='button' className='fn' value={"+"} onClick={(e) => {
                                cal()
                                setsig("+");
                            }}></input>
                        </div>
                        <div className="layear-1">
                            <input type='button' value={"."} onClick={(e) => { setst(st + e.target.value) }}></input>
                            <input type='button' value={"0"} onClick={(e) => { setst(st + e.target.value) }}></input>
                            <input type='button' value={"00"}></input>
                            <input type='button' className='fn' value={"="} onClick={ans} style={{columnSpan:"2"}}></input>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default App;
