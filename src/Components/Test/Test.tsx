import React, {useState} from 'react'
import classes from './Test.module.sass'
import {PhraseEnType} from "../../App";
import {PutResult} from "./ResultPhrase/PutResult";
import {PutClouds} from "./SetOfWords/PutClouds";


type TestPropsType = {
    words: Array<PhraseEnType>
    resultSentence: Array<PhraseEnType>
    // setSentence: (resultSentence: Array<string>) => void
    // setDisabled: (disabled: boolean) => void
}

export const Test: React.FC<TestPropsType> = React.memo((
    {words,
        resultSentence,
        // setSentence,
        // setAnswer,
        ...otherProps}) => {
    const [currentWordCloud, setCurrentWordCloud] = useState<PhraseEnType | null>(null)
    const [currentWordPut, setCurrentWordPut] = useState<PhraseEnType | null>(null)
    return (
        <div className={classes.test}>
            <PutResult words={resultSentence} />
            <PutClouds words={words}/>
        </div>
    );

})

{/*<PutWordsContainer currentValue={currentWordCloud ? currentWordCloud : null} setCurrentWord={setCurrentWordPut}*/}
{/*          setSentence={setSentence} setAnswer={setAnswer} {...otherProps}/>*/}
{/*<CloudsWordsContainer words={words} setCurrentWord={setCurrentWordCloud} currentValue={currentWordPut}*/}
{/*             setAnswer={setAnswer} currentWordCloud={currentWordCloud} pageY={pageY}/>*/}