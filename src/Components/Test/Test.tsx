import React, {useState} from 'react'
import classes from './Test.module.sass'
import {PhraseEnType} from '../../App';
import {PutResult} from './ResultPhrase/PutResult';
import {PutClouds} from './SetOfWords/PutClouds';


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

    return (
        <div className={classes.test}>
            <PutResult words={resultSentence}/>
            <PutClouds words={words}/>
        </div>
    );

})
