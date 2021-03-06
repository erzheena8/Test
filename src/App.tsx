import React, {createContext, useEffect, useState} from 'react'
import './App.sass'
import {Phrase} from './Components/Phrase/Phrase';
import {Test} from './Components/Test/Test';
import {CheckTest} from './Components/CheckTest/CheckTest';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd'


export type PhraseEnType = {
    id: number
    position: number
    status: string             //'cloud'|'result'
    word: string
}

export type SetAnswerType = {
    answer: string,
    error: boolean
}

export type ContextType = {
    putWordResult: ((id: number)=>void)|null
    putWordCloud: ((id: number)=>void)|null
}

export const WordContext = createContext<ContextType>({
    putWordResult: null,
    putWordCloud: null
})

function App() {
    const   phraseRus = 'Я пойду в магазин, а ты оставайся дома.',
            randomWords = ['are', 'is', 'was', 'am', 'for', 'sit', 'a', 'in'],
            resultEn = 'I will go to the shop and you stay at home'

    const   [phrase, setPhrase] = useState<Array<PhraseEnType>>([]),
            [resultSentence, setResultSentence] = useState<Array<PhraseEnType>>([]),
            [checkSorting, setCheckSorting] = useState<boolean>(true),
            [answer, setAnswer] = useState<SetAnswerType>({answer: '', error: false})

    const mixWords = (phrase: string, randomWords: Array<string>) => {
        const   words = phrase.split(' '),
                randomWordsArr = randomWords
        let     param = randomWordsArr.length,
                space = ''
        for (let i = words.length + 2; i >= 0; i--) {
            let random = Math.floor(Math.random() * (i - 0) + 0)
            space = words[i]
            words[i] = words[random]
            words[random] = space
            if (!words[i]) {
                let random = Math.floor(Math.random() * (param - 0) + 0)
                words[i] = randomWordsArr[random]
                randomWordsArr.splice(random, 1)
                param--
            }
        }
        return words
    }

    useEffect(() => {
        speechSynthesis.cancel()
        const newWords = mixWords(resultEn, randomWords).map((w, index) => {
            return {id: index, position: index + 1, status: 'cloud', word: w}
        })
        setPhrase(newWords)
    }, [])

    useEffect(() => {
        const len = phrase.length
        if (len > 0) {
            if (phrase[len - 2].position > phrase[len - 1].position) {
                setCheckSorting(false)
            } else setCheckSorting(true)
        }
    }, [phrase])
    const sorting = () => {
        setPhrase(phrase.sort((a: PhraseEnType, b: PhraseEnType) => {
            if (a.position < b.position) return -1
            if (a.position > b.position) return 1
            return 0
        }))
        setCheckSorting(true)
    }
    useEffect(() => {
        if (!checkSorting) {
            setTimeout(sorting, 400)
        }
    }, [checkSorting])

    const putWordResult = (id: number) => {
        phrase.map(p => {
            if (p.id === id && p.status !== 'result') {
                p.status = 'result'
                setResultSentence([...resultSentence, p])
                setPhrase(phrase.filter(p => {
                    if (p.id !== id) return p
                }))
            }
            return p
        })
        setAnswer({answer: '', error: false})
    }

    const putWordCloud = (id: number) => {
        resultSentence.map(p => {
            if (p.id === id) {
                p.status = 'cloud'
                setPhrase([...phrase, p])

                setResultSentence(resultSentence.filter(p => {
                    if (p.id !== id) return p
                }))
            }
            return p
        })
        setCheckSorting(false)
        setAnswer({answer: '', error: false})
    }
    return (
        <div className='App'>
            <div className='wrapper'>
                <div className='displayTest'>
                    <h1>Translate this sentence</h1>
                    <Phrase text={phraseRus}/>
                    <WordContext.Provider value={{putWordResult, putWordCloud}}>
                        <DndProvider backend={HTML5Backend}>
                            {phrase.length !== 0
                                ? <Test words={phrase} resultSentence={resultSentence} setPhrase={setPhrase}/>
                                : <div>Wait a minute</div>
                            }
                        </DndProvider>
                    </WordContext.Provider>
                    <CheckTest
                        answer={answer}
                        setAnswer={setAnswer}
                        checkSentence={resultEn}
                        resultSentence={resultSentence}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

