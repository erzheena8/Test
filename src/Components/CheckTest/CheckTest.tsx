import React, {useEffect, useState} from 'react'
import classes from './CheckTest.module.sass'


type CheckTestPropsType = {
    sentence: Array<string>
    resultSentence: string
    answer:string
    setAnswer: (answer:string)=>void
    disabled: boolean

}

export const CheckTest: React.FC<CheckTestPropsType> = React.memo((
    {sentence, resultSentence,answer, setAnswer, ...otherProps}) => {
    const [checkCorrect, setCheckCorrect] = useState<boolean>(false)
    const setValue = () => {
        setAnswer('Something wrong!')
        setCheckCorrect(false)
    }
    console.log(otherProps.disabled)
    const checkResult = () => {
        let result = resultSentence.split(' ')
        if (result.length !== sentence.length) {
            setValue()
            return
        }
        for(let i=0; i<result.length; i++) {
            if (result[i] !== sentence[i]) {
                setValue()
                return
            }
        }
        setAnswer('Correct!')
        setCheckCorrect(true)
        speechSynthesis.speak(new SpeechSynthesisUtterance(sentence.join(' ')))
    }

    return (
        <div className={classes.checkTest}>
            <div className={`${classes.answerCheck} ${checkCorrect?classes.correct:classes.error}`} >
                {answer && answer}
            </div>
            <div className={classes.buttonCheck}>
                <button onClick={checkResult} onBlur={()=>{
                    setTimeout(()=>{setAnswer('')},0)}} disabled={otherProps.disabled||Boolean(answer)}>
                    Check
                </button>
            </div>
        </div>
    );

})