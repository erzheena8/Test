import React, {useContext, useEffect, useState} from 'react'
import classes from './PutResult.module.sass'
import {PhraseEnType, WordContext} from '../../../App'
import {DropTarget, useDrop} from 'react-dnd';
import {ItemType} from "../../../utils/item";
import {Cloud} from '../Cloud/Cloud';


type PutResultPropsType = {
    words: Array<PhraseEnType>
    // currentValue: PhraseEnType | null
    // setCurrentWord: (currentWordPut: PhraseEnType | null) => void
    // setSentence: (resultSentence: Array<string>) => void
    // setAnswer: (answer: string) => void
    // setDisabled: (disabled: boolean) =>void

}


export const PutResult: React.FC<PutResultPropsType> =
    ({
         words,
         children,
         ...otherProps
     }) => {

        const {putWordResult} = useContext(WordContext)
        const [{isOver}, drop] = useDrop({
            accept: ItemType.WORD,
            //@ts-ignore
            drop: (item, monitor) => putWordResult(item.id),
            collect: monitor => ({
                isOver: !!monitor.isOver()
            })
        })
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
            <div className={classes.put} ref={drop}>
                <div className={`${classes.putItem}`} >
                    {words
                        .map(w => {
                            return <Cloud key={w.id} id={w.id}>{w.word}</Cloud>
                        })
                    }
                </div>
                <div className={classes.putItem}></div>
                <div className={classes.putItem}></div>
            </div>
        );

    }

