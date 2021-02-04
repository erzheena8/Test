import React, {useEffect, useState} from 'react'
import classes from './Test.module.sass'
import {PhraseEnType} from "../../App";
import {PutResult} from "./ResultPhrase/PutResult";
import {PutClouds} from "./SetOfWords/PutClouds";


type TestPropsType = {
    words: Array<PhraseEnType>
    resultSentence: Array<PhraseEnType>
    setPhrase: (phrase: Array<PhraseEnType>) => void
}

export const Test: React.FC<TestPropsType> = React.memo((
    {
        words,
        resultSentence,
        setPhrase,
        ...otherProps
    }) => {
    const [coordinate, setCoordinate] = useState<{x: number, y:number}>({x:0, y:0})

    return (
        <div className={classes.test} onMouseMove={(e)=> {
            setCoordinate({x:e.pageX, y: e.pageY})
        }}>
            <PutResult words={resultSentence}/>
            <PutClouds words={words}/>
        </div>
    );

})

{/*<PutWordsContainer currentValue={currentWordCloud ? currentWordCloud : null} setCurrentWord={setCurrentWordPut}*/
}
{/*          setSentence={setSentence} setAnswer={setAnswer} {...otherProps}/>*/
}
{/*<CloudsWordsContainer words={words} setCurrentWord={setCurrentWordCloud} currentValue={currentWordPut}*/
}
{/*             setAnswer={setAnswer} currentWordCloud={currentWordCloud} pageY={pageY}/>*/
}