import React, {useEffect, useState} from 'react'
import classes from './CheckTest.module.sass'
import {PhraseEnType, SetAnswerType} from "../../App";


type CheckTestPropsType = {
    checkSentence: string
    resultSentence: Array<PhraseEnType>
    answer: SetAnswerType
    setAnswer: (answer: SetAnswerType) => void

}

export const CheckTest: React.FC<CheckTestPropsType> = React.memo((
    {
        checkSentence,
        resultSentence,
        ...otherProps
    }) => {
    const [disabled, setDisabled] = useState<boolean>(true)
    useEffect(()=> {
        if (!otherProps.answer.answer) setDisabled(false)
    }, [otherProps.answer])

    useEffect(()=> {
        if (resultSentence.length === 0) setDisabled(true)
        else if (resultSentence.length > 0) setDisabled(false)
    }, [resultSentence])


    const setValue = (check: boolean) => {
        check
            ? otherProps.setAnswer({answer: 'This is not true', error: true})
            : otherProps.setAnswer({answer: 'Correct', error: false})
        setDisabled(true)
    }
    const checkResult = () => {
        let result = checkSentence.split(' ')
        if (result.length !== resultSentence.length) {
            setValue(true)
            return
        }
        for (let i = 0; i < resultSentence.length; i++) {
            if (result[i] !== resultSentence[i].word) {
                setValue(true)
                return
            }

        }

        setValue(false)
        setDisabled(true)
        speechSynthesis.speak(new SpeechSynthesisUtterance(result.join(' ')))
    }

    return (
        <div className={classes.checkTest}>
            {otherProps.answer.answer &&
            <div className={`${classes.answerCheck} ${otherProps.answer.error ? classes.error : classes.correct}`}>
                {otherProps.answer.answer}
            </div>}
            <div className={classes.buttonCheck}>
                <button onClick={checkResult} disabled={disabled}>
                    Check
                </button>
            </div>
        </div>
    );

})