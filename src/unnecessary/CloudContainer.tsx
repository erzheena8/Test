import React, {useEffect, useState} from 'react'
import {Cloud} from "../Components/Test/Cloud/Cloud";
import {PhraseEnType} from "../App";

type CloudContainerPropsType = {
    currentValue: PhraseEnType | null
    setCurrentWord: (currentValue: PhraseEnType | null) => void
    words: Array<PhraseEnType>
    setWords: (words: Array<PhraseEnType>) => void
    setAnswer: (answer: string) => void
    pageY?:number
}

export const CloudContainer: React.FC<CloudContainerPropsType> = React.memo(
    ({currentValue, setCurrentWord, words, setWords, setAnswer, ...otherProps}) => {
        useEffect(() => {
            currentValue && setWords([...words, currentValue])
            setTimeout(() => {
                setCurrentWord(null)
            }, 0)
        }, [currentValue])

        const setNewWordsList = (word: PhraseEnType) => {
            setCurrentWord(word)
            let newWordsList = words.filter(wl => wl.id !== word.id)
            setWords(newWordsList)
            setAnswer('')
        }

        const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement>, word: PhraseEnType) => {
            // console.log(word)
            //@ts-ignore
            // e.target.style.position = 'relative'
            //@ts-ignore
            // e.target.style.zIndex = '1000'
            //@ts-ignore

             e.target.style.transform =  `translateY(${otherProps.pageY - e.target.getBoundingClientRect().y - e.target.offsetHeight}px)`

            //@ts-ignore
            // console.log(e.pageY - e.target.getBoundingClientRect().y - e.target.offsetHeight/2)
        }
        const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>, word: PhraseEnType) => {
            //@ts-ignore
            //@ts-ignore
            e.target.style.transform =  `translateY(${otherProps.pageY - e.target.getBoundingClientRect().y - e.target.offsetHeight}px)`
            // e.target.style.trasformY = e.pageY - e.target.getBoundingClientRect().y-e.target.offsetHeight+'px'
            console.log(otherProps.pageY )

            // console.log(word)
        }
        const mouseUpHandler = (e: React.MouseEvent<HTMLDivElement>, word: PhraseEnType) => {
            // console.log(word)
        }
        // console.log(words)
        return (
            <>
                {
                    // words.map(wl => {
                    //     return <Cloud key={wl.id} word={wl} clickHandler={setNewWordsList} mouseDownHandler={mouseDownHandler} mouseMoveHandler={mouseMoveHandler} mouseUpHandler={mouseUpHandler}
                    //                   empty={false}>{wl.word}</Cloud>
                    //
                    // })
                }
            </>
        );

    }
)