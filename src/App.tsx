import React, {createContext, useEffect, useState} from 'react'
import './App.sass'
import {Phrase} from "./Components/Phrase/Phrase";
import {Test} from "./Components/Test/Test";
import {CheckTest} from "./Components/CheckTest/CheckTest";
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

export const WordContext = createContext({
    putWordResult: null,
    putWordCloud: null
})

function App() {
    const phraseRus = 'Я пойду в магазин, а ты оставайся дома.',
        randomWords = ['are', 'is', 'was', 'am', 'for', 'sit', 'a', 'in'],
        resultEn = 'I will go to the shop and you stay at home'

    const [phrase, setPhrase] = useState<Array<PhraseEnType>>([]),
        [resultSentence, setResultSentence] = useState<Array<PhraseEnType>>([]),
        [cloudSentence, setCloudSentence] = useState<Array<PhraseEnType>>([]),
        [answer, setAnswer] = useState<SetAnswerType>({answer: '', error: false})


    const mixWords = (phrase: string, randomWords: Array<string>) => {
        const words = phrase.split(' '),
            randomWordsArr = randomWords
        let param = randomWordsArr.length,
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


    // const putWordResult = (id: number) => {
    //     let dragWord = phrase.map(p => {
    //         if (p.id === id && p.status === 'cloud') {
    //             p.status = 'result'
    //             setResultSentence([...resultSentence, p])
    //         } else if (p.id === id && p.status === 'result') {
    //             p.status = 'cloud'
    //             setResultSentence(resultSentence.filter(p => {
    //                 if (p.id !== id) return p
    //             }))
    //             setCloudSentence([...cloudSentence, p])
    //         }
    //         return p
    //     })
    //     setPhrase(dragWord)
    // }
    const putWord = (id: number, status: string, setResult: Function) => {
        let dragWord = phrase.map(p => {
            if (p.id === id) {
                p.status = status
                setResult(p)
            }
            return p
        })
        setPhrase(dragWord)
        setAnswer({answer: '', error: false})
    }



    const putWordResult = (id: number) => {
        let dragWord = phrase.map(p => {
            if (p.id === id&&p.status!=='result') {
                p.status = 'result'
                setResultSentence([...resultSentence, p])
            }
            return p
        })
        setPhrase(dragWord)
        setAnswer({answer: '', error: false})
    }

    const putWordCloud = (id: number) => {
        const setResult = (param: PhraseEnType)=> {
            setResultSentence(resultSentence.filter(p => {
                if (p.id !== id) return p
            }))
        }
        putWord(id, 'cloud', setResult)
        // let dragWord = phrase.map(p => {
        //     if (p.id === id) {
        //         p.status = 'cloud'
        //
        //         setCloudSentence([...cloudSentence, p])
        //     }
        //     return p
        // })
        // setPhrase(dragWord)
        // setAnswer({answer: '', error: false})


    }
    // const putWordCloud = (id: number) => {
    //     let dragWord = phrase.map(p=> {
    //         debugger
    //         if (p.id === id && p.status === 'cloud') {
    //             p.status = 'result'
    //         } else if (p.id === id && p.status === 'result') {
    //             p.status = 'cloud'
    //         }
    //         return p
    //     })
    //     setPhrase(dragWord)
    // }
    // console.log(phrase)
    return (
        <div className='App'>
            <div className='wrapper'>
                <div className='displayTest'>
                    <h1>Translate this sentence</h1>
                    <Phrase text={phraseRus}/>
                    {/*@ts-ignore*/}
                    <WordContext.Provider value={{putWordResult, putWordCloud} }>
                        <DndProvider backend={HTML5Backend}>
                            {phrase.length !== 0
                                ? <Test words={phrase} resultSentence={resultSentence}/>
                                : <div>Wait a minute</div>
                            }
                        </DndProvider>
                    </WordContext.Provider>
                    <CheckTest
                        answer={answer}
                        // disabled={disabled}
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
