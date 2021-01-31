import React, {useState} from 'react'
import classes from './Test.module.sass'
import {PutWords} from "./PutWords/PutWords";
import {CloudsWords} from "./CloudsWords/CloudsWords";
import {PhraseEnType} from "../../App";

type TestPropsType = {
    words: Array<PhraseEnType>
    setSentence: (resultSentence:Array<string>)=>void
    setAnswer: (answer:string)=>void
    setDisabled: (disabled: boolean) =>void
}

export const Test:React.FC<TestPropsType> =React.memo( (
    {words,setSentence,setAnswer, ...otherProps}) => {
    const [currentWordCloud, setCurrentWordCloud] = useState<PhraseEnType|null>(null)
    const [currentWordPut, setCurrentWordPut] = useState<PhraseEnType|null>(null)
    return (
        <div className={classes.test}>
            <PutWords currentValue={currentWordCloud?currentWordCloud:null} setCurrentWord={setCurrentWordPut} setSentence={setSentence} setAnswer={setAnswer} {...otherProps}/>
            <CloudsWords words={words} setCurrentWord={setCurrentWordCloud} currentValue={currentWordPut} setAnswer={setAnswer}/>
        </div>
    );

})