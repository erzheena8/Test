import React, {useContext, useEffect, useState} from 'react'
// import classes from './PutWords.module.sass'
// import {PhraseEnType, WordContext} from "../../App";
// import {CloudContainer} from "../CloudContainer";
// import {DropTarget, useDrop} from "react-dnd";
// import {ItemType} from "../../utils/item";
//
// type PutWordsPropsType = {
//     currentValue: PhraseEnType | null
//     setCurrentWord: (currentWordPut: PhraseEnType | null) => void
//     setSentence: (resultSentence: Array<string>) => void
//     setAnswer: (answer: string) => void
//     setDisabled: (disabled: boolean) =>void
//
// }


export const PutWords = () => {
    // const [wordsList, setWordsList] = useState<Array<PhraseEnType>>([])
    //
    // const {putWordResult} = useContext(WordContext)
    //
    // const [{isOver}, drop] = useDrop({
    //     accept: ItemType.WORD,
    //     //@ts-ignore
    //     drop: (item, monitor)=>putWordResult(item.id),
    //     collect: monitor => ({
    //         isOver: !!monitor.isOver()
    //     })
    // })
    // useEffect(() => {
    //     if (wordsList.length === 0) {
    //         otherProps.setDisabled(true)
    //     } else otherProps.setDisabled(false)
    //
    //     let resultSentence = wordsList.map(wl => {
    //         if (wl.word!==null) return wl.word
    //     })
    //     //@ts-ignore
    //     setSentence(resultSentence)
    // }, [wordsList])


    return (
        <div >
            {/*<div className={`${classes.putItem} ${isOver&&classes.over}`} ref={drop}>*/}
            {/*    {children}*/}
            {/*    /!*<CloudContainer currentValue={currentValue} setCurrentWord={setCurrentWord} words={wordsList}*!/*/}
            {/*    /!*                setWords={setWordsList} setAnswer={setAnswer}/>*!/*/}
            {/*</div>*/}
            {/*<div className={classes.putItem}></div>*/}
            {/*<div className={classes.putItem}></div>*/}
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