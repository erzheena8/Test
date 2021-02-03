import React, {useEffect, useState} from 'react'
import classes from './CloudsWords.module.sass'
import {PhraseEnType} from "../../App";
import {CloudContainer} from "../CloudContainer";
import {DragSource, useDrag} from "react-dnd";
import {ItemType} from "../../utils/item";
import {Cloud} from "../../Components/Test/Cloud/Cloud";

type CloudsWordsPropsType = {
    words: Array<PhraseEnType>
    setCurrentWord: (currentWord: PhraseEnType | null) => void
    currentValue: (PhraseEnType | null)
    setAnswer: (answer: string) => void
    currentWordCloud: PhraseEnType | null
    pageY: number
}


export const CloudsWords: React.FC<CloudsWordsPropsType> =
    ({words, setCurrentWord, currentValue, setAnswer, ...otherProps}) => {
        const [wordsListCloud, setWordsListCloud] = useState<Array<PhraseEnType>>([])

        // const [emptyWords, setEmptyWords] = useState<Array<number>>([])
        useEffect(() => {
            setWordsListCloud([...words])
            //@ts-ignore
            // param = words.map(w=>{
            //     if (typeof(w.id)==="number") {
            //         return w.id
            //     }
            //     })
            // if (param.length % 5 !== 0) {
            //     while (param.length % 5 !== 0) {
            //         param.push(param.length)
            //     }
            // }

        }, [words])
        useEffect(() => {
            // if (wordsListCloud.length % 5 !== 0) {
            //     if (otherProps.currentWordCloud) {
            //         // debugger
            //         setWordsListCloud([...wordsListCloud, {id: null, position: null, word: null}])
            //     }
            // if (currentValue) {
            //     let arr = wordsListCloud
            //     let index = arr.indexOf({id: null, position: null, word:null})
            //     console.log(index)
            //     arr.splice(arr.length-2,1)
            //     setWordsListCloud([...arr])
            //
            // }
            // if (otherProps.currentWordPut) {
            //     setWordsListCloud(wordsListCloud.filter(wl=>{
            //         if (wl.id!==null) return wl
            //         else return
            //     }))
            // }
            // }
            // const sortingCloudWords = (a:PhraseEnType, b:PhraseEnType) => {
            //     if(a.position<b.position) {
            //         return -1
            //     }
            //     if(a.id>b.id) {
            //         return 1
            //     }
            //     return 0
            // }
            // setWordsListCloud(wordsListCloud.sort(sortingCloudWords))
        }, [wordsListCloud])

        return (
            <div className={classes.clouds}>

                {/*<CloudContainer*/}
                {/*    ref = {drag} //dnd*/}
                {/*    opacity = {isDragging?'0.5':'1'}*/}
                {/*    currentValue={currentValue}*/}
                {/*    setCurrentWord={setCurrentWord}*/}
                {/*    words={wordsListCloud}*/}
                {/*    setWords={setWordsListCloud}*/}
                {/*    setAnswer={setAnswer}*/}
                {/*    pageY={otherProps.pageY}*/}
                {/*/>*/}
            </div>
        );

    }

// export const CloudsWords: React.FC<CloudsWordsPropsType> =
//     ({words}) => {
//     let coordinate = 0, h = 0
//         function onDragStartHandler(e: React.DragEvent<HTMLDivElement>, word: PhraseEnType) {
//             setTimeout(()=> {
//                 // @ts-ignore
//                 // e.target.style.position = 'absolute'
//             }, 0)
//             // @ts-ignore
//             coordinate = e.target.getBoundingClientRect().y
//             // @ts-ignore
//             h = e.target.getBoundingClientRect().height
//             // console.log(coordinate)
//         }
//
//         function onDragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
//         }
//
//         function onDragEndHandler(e: React.DragEvent<HTMLDivElement>) {
//             // @ts-ignore
//             // e.target.style.transform = `translateY(0)`
//
//         }
//
//         function onDragOverHandler(e: React.DragEvent<HTMLDivElement>) {
//             e.preventDefault()
//         }
//
//         function onDropHandler(e: React.DragEvent<HTMLDivElement>, word: PhraseEnType) {
//
//
//         }
//
//         function onDragHandler(e: React.DragEvent<HTMLDivElement>, word: PhraseEnType) {
//             e.preventDefault()
//             // setTimeout(()=> {
//                 //@ts-ignore
//                 e.target.style.transform = `translateY(${e.pageY-coordinate-h}px)`
//             // }, 0)
//             if (e.pageY>=coordinate) {
//                 //@ts-ignore
//                 e.target.style.transform = `translateY(0)`
//             }
//             if (e.pageY<=350) {
//                 //@ts-ignore
//                 e.target.style.transform = `translateY(${-(coordinate-320)}px)`
//             }
//             // console.log('c',coordinate)
//             // console.log('e.pageY',coordinate)
//             //     if (e.pageY-coordinate-h<=)
//
//             // console.log(e)
//             // e.clientX =  282
//             // e.pageX = 282
//             // e.screenX = 282
//         }
//
//         return (
//             <>
//                 <div className={classes.clouds}>
//                     {
//                         words.map(w => {
//                             return <Cloud key={w.id}
//                                           word={w}
//                                           onDragStart={onDragStartHandler}
//                                           onDragLeave={onDragLeaveHandler}
//                                           onDragEnd={onDragEndHandler}
//                                           onDragOver={onDragOverHandler}
//                                           onDrop={onDropHandler}
//                                           onDrag={onDragHandler}>
//                                 {w.word}
//                             </Cloud>
//                         })
//                     }
//                 </div>
//             </>
//         );
//
//     }