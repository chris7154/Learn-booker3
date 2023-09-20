import React from 'react';
import { useEffect, useState } from 'react';
import Primaryone from './Primaryone';
import Primarytwo from "./Primarytwo";
import Primarythree from "./Primarythree";
import Primaryfour from "./Primaryfour";
import Primaryfive from "./Primaryfive";
import Primarysix from "./Primarysix";
import JSS1 from "./JSS1";
import JSS2 from "./JSS2";
import JSS3 from "./JSS3";
import SS1 from "./SS1";
import SS2 from "./SS2";
import SS3 from "./SS3";
import Tetiary from "./Tetiary";



export default function Home() {
    const [ Class, setClass] = useState ('selectClass');
    const [PrimaryoneContentVisible, setPrimaryoneContentVisible] = useState (false);
    const [PrimarytwoContentVisible, setPrimarytwoContentVisible] = useState (false);
    const [PrimarythreeContentVisible, setPrimarythreeContentVisible] = useState (false);
    const [PrimaryfourContentVisible, setPrimaryfourContentVisible] = useState (false);
    const [PrimaryfiveContentVisible, setPrimaryfiveContentVisible] = useState (false);
    const [PrimarysixContentVisible, setPrimarysixContentVisible] = useState (false);

    const [JSS1ContentVisible, setJSS1ContentVisible] = useState (false);
    const [JSS2ContentVisible, setJSS2ContentVisible] = useState (false);
    const [JSS3ContentVisible, setJSS3ContentVisible] = useState (false);
    const [SS1ContentVisible, setSS1ContentVisible] = useState (false);
    const [SS2ContentVisible, setSS2ContentVisible] = useState (false);
    const [SS3ContentVisible, setSS3ContentVisible] = useState (false);
    const [TetiaryContentVisible, setTetiaryContentVisible] = useState (false);


    useEffect (() => {
        Class === "Primaryone"
        ? setPrimaryoneContentVisible (true)
        : setPrimaryoneContentVisible (false);

        Class === "Primarytwo"
        ? setPrimarytwoContentVisible (true)
        : setPrimarytwoContentVisible (false);

        Class === "Primarythree"
        ? setPrimarythreeContentVisible (true)
        : setPrimarythreeContentVisible (false);

        Class === "Primaryfour"
        ? setPrimaryfourContentVisible (true)
        : setPrimaryfourContentVisible (false);

        Class === "Primaryfive"
        ? setPrimaryfiveContentVisible (true)
        : setPrimaryfiveContentVisible (false);

        Class === "Primarysix"
        ? setPrimarysixContentVisible (true)
        : setPrimarysixContentVisible (false);

        Class === "JSS1"
        ? setJSS1ContentVisible (true)
        : setJSS1ContentVisible (false);

        Class === "JSS2"
        ? setJSS2ContentVisible (true)
        : setJSS2ContentVisible (false);

        Class === "JSS3"
        ? setJSS3ContentVisible (true)
        : setJSS3ContentVisible (false);

        Class === "SS1"
        ? setSS1ContentVisible (true)
        : setSS1ContentVisible (false);

        Class === "SS2"
        ? setSS2ContentVisible (true)
        : setSS2ContentVisible (false);

        Class === "SS3"
        ? setSS3ContentVisible (true)
        : setJSS1ContentVisible (false);

        Class === "Tetiary"
        ? setTetiaryContentVisible (true)
        : setTetiaryContentVisible (false);


    }, [Class] );

    const handleOnChange = (e) => {
        setClass (e.target.value);
    }

    const makeFirstLetterCapital = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const renderResult = () => {
        let result;
        Class === "selectClass"
        ? (result = "select your class")
        : (result = makeFirstLetterCapital);
        return result;
    };

    return (
        <>   <div className='container mt-3'>
               <h1>Hello. {renderResult()}</h1>
             </div>
             <div className='mt-4'>
                <select className='form-select' value={Class} onChange={handleOnChange}>
                    <option value="selectClass">Select your Class</option>
                    <option value="Primaryone">Primaryone</option>
                    <option value="Primarytwo">Primarytwo</option>
                    <option value="Primarythree">Primarythree</option>
                    <option value="Primaryfour">Primaryfour</option>
                    <option value="Primaryfive">Primaryfive</option>
                    <option value="Primarysix">Primarysix</option>
                    <option value="JSS1">JSS1</option>
                    <option value="JSS2">JSS2</option>
                    <option value="JSS3">JSS3</option>
                    <option value="SS1">SS1</option>
                    <option value="SS2">SS2</option>
                    <option value="SS3">SS3</option>
                    <option value="Tetiary">Tetiary</option>

                </select>
            </div>

            {PrimaryoneContentVisible && <Primaryone/>}
            {PrimarytwoContentVisible && <Primarytwo/>}
            {PrimarythreeContentVisible && <Primarythree/>}
            {PrimaryfourContentVisible && <Primaryfour/>}
            {PrimaryfiveContentVisible && <Primaryfive/>}
            {PrimarysixContentVisible && <Primarysix/>}
            {JSS1ContentVisible && <JSS1/>}
            {JSS2ContentVisible && <JSS2/>}
            {JSS3ContentVisible && <JSS3/>}
            {SS1ContentVisible && <SS1/>}
            {SS2ContentVisible && <SS2/>}
            {SS3ContentVisible && <SS3/>}

            
         </>
    );
    

    


}