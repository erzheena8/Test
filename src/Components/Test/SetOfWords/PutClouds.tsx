import React, {useContext, useEffect, useState} from 'react'
import classes from './PutClouds.module.sass'
import {PhraseEnType, WordContext} from '../../../App'
import {DropTarget, useDrop} from 'react-dnd';
import {ItemType} from "../../../utils/item";
import {Cloud} from "../Cloud/Cloud";


type PutCloudsPropsType = {
    words: Array<PhraseEnType>
}


export const PutClouds: React.FC<PutCloudsPropsType> =
    ({
         words,
         children,
         ...otherProps
     }) => {

        const {putWordCloud} = useContext(WordContext)

        const [{isOver}, drop] = useDrop({
            accept: ItemType.WORD,
            //@ts-ignore
            drop: (item, monitor) => putWordCloud(item.id),
            collect: monitor => ({
                isOver: !!monitor.isOver()
            })
        })




        return (
            <div className={classes.clouds} ref={drop}>
                {
                    words.filter(w => {
                        if (w.status === 'cloud') return w
                    })
                        .map(w => {
                            return <Cloud key={w.id} id={w.id}>{w.word}</Cloud>
                        })
                }
            </div>
        );

    }