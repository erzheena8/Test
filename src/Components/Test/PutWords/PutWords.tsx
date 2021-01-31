import React, {useEffect, useState} from 'react'
import classes from './PutWords.module.sass'
import {PhraseEnType} from "../../../App";
import {CloudContainer} from "../CloudsWords/Cloud/CloudContainer";

type PutWordsPropsType = {
    currentValue: PhraseEnType | null
    setCurrentWord: (currentWordPut: PhraseEnType | null) => void
    setSentence: (resultSentence: Array<string>) => void
    setAnswer: (answer: string) => void
    setDisabled: (disabled: boolean) =>void

}

export const PutWords: React.FC<PutWordsPropsType> = ({currentValue, setCurrentWord, setSentence, setAnswer, ...otherProps}) => {
    const [wordsList, setWordsList] = useState<Array<PhraseEnType>>([])
    useEffect(() => {
        if (wordsList.length === 0) {
            otherProps.setDisabled(true)
        } else otherProps.setDisabled(false)

        let resultSentence = wordsList.map(wl => {
            return wl.word
        })
        setSentence(resultSentence)
    }, [wordsList])
    return (
        <div className={classes.put}>
            <div className={classes.putItem}>
                <CloudContainer currentValue={currentValue} setCurrentWord={setCurrentWord} words={wordsList}
                                setWords={setWordsList} setAnswer={setAnswer}/>
            </div>
            <div className={classes.putItem}></div>
        </div>
    );

}


// const [wordsList, setWordsList] = useState<Array<PhraseEnType>>([])
// let coordinate = 0
// // useEffect(()=> {
// //     coordinate =
// // },[])
// useEffect(()=> {
//     endWord && setWordsList([...wordsList, endWord])
//
// },[endWord])
// // console.log(wordsList)
// return (
//     <div className={classes.put}>
//         <div className={classes.putItem} onClick={(e)=>{
//             console.log (e.clientY)
//         }}>
//             {/*{*/}
//             {/*    wordsList.length>0*/}
//             {/*        ?wordsList.map(wl=> {return <Cloud key={wl.id}>{wl.word}</Cloud>})*/}
//             {/*        : ''*/}
//             {/*}*/}
//
//         </div>
//         <div className={classes.putItem}></div>
//     </div>
// );