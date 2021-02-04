import React, {useContext, useEffect, useState} from 'react'
import classes from './PutResult.module.sass'
import {PhraseEnType, WordContext} from '../../../App'
import {DropTarget, useDrop} from 'react-dnd';
import {ItemType} from "../../../utils/item";
import {Cloud} from '../Cloud/Cloud';


type PutResultPropsType = {
    words: Array<PhraseEnType>
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

