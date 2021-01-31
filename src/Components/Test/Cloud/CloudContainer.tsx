import React, {useEffect, useState} from 'react'
import {Cloud} from "./Cloud";
import {PhraseEnType} from "../../../App";

type CloudContainerPropsType = {
    currentValue: PhraseEnType | null
    setCurrentWord: (currentValue: PhraseEnType | null) => void
    words: Array<PhraseEnType>
    setWords: (words: Array<PhraseEnType>) => void
    setAnswer: (answer: string) => void

}

export const CloudContainer: React.FC<CloudContainerPropsType> = React.memo(
    ({currentValue, setCurrentWord, words, setWords, setAnswer}) => {
        // const [wordsList, setWordsList] = useState<Array<PhraseEnType>>([])
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

        return (
            <>
                {
                    words.map(wl => {
                        return <Cloud key={wl.id} word={wl} clickHandler={setNewWordsList}>{wl.word}</Cloud>
                    })
                }
            </>
        );

    })