import React, {useEffect, useState} from 'react'
import './App.sass'
import {Phrase} from "./Components/Phrase/Phrase";
import {Test} from "./Components/Test/Test";
import {CheckTest} from "./Components/CheckTest/CheckTest";

export type PhraseEnType = {
    id: number
    position: number
    word: string
}


function App() {
    const phraseRus = 'Я пойду в магазин, а ты оставайся дома.',
        randomWords = ['are', 'is', 'was', 'am', 'for', 'sit', 'a', 'in'],
        [phraseEn, setPhraseEn] = useState<Array<PhraseEnType>>([]),
        [resultSentence, setResultSentence] = useState<Array<string>>([]),
        [answer, setAnswer] = useState<string>(''),
        [disabled, setDisabled] = useState<boolean>(true),
        // regexp = /[?]/|/\,/g
         resultEn = 'I will go to the shop and you stay at home'
        // .replace(regexp, ' ')
    console.log(resultEn)


        const
    mixWords = (phrase: string, randomWords: Array<string>) => {
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
        let newWords = mixWords(resultEn, randomWords).map((w, index) => {
            return {id: index, position: index, word: w}
        })
        setPhraseEn([...newWords])
        try {
            if (phraseEn.length < 4) {
                throw 1
            }
            phraseEn.map(p => {
                if (!p.word) {
                    throw 10
                }
            })
        } catch (e) {
        }
    }, [])
    return (
        <div className='App'>
            <div className='wrapper'>
                <div className='displayTest'>
                    <h1>Translate this sentence</h1>
                    <Phrase text={phraseRus}/>
                    <Test words={phraseEn} setSentence={setResultSentence} setAnswer={setAnswer}
                          setDisabled={setDisabled}/>
                    <CheckTest sentence={resultSentence} resultSentence={resultEn} answer={answer}
                               setAnswer={setAnswer} disabled={disabled}/>
                </div>
            </div>
        </div>
    );
}

export default App;
