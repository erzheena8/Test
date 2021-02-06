import React, {useContext, Component} from 'react'
import classes from './PutClouds.module.sass'
import {PhraseEnType, WordContext} from '../../../App'
import {useDrop} from 'react-dnd';
import {ItemType} from '../../../utils/item';
import { CloudContainer, ItemDragType} from '../Cloud/Cloud';
import FlipMove from 'react-flip-move';


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
            drop: (item: ItemDragType, monitor) => putWordCloud && putWordCloud(item.id),
            collect: monitor => ({
                isOver: !!monitor.isOver()
            })
        })

        return (
            <div className={classes.clouds} ref={drop}>
                <FlipMove className={classes.flipContainer}>
                {
                    words.map(w => {
                        return <CloudContainer key={w.id} id={w.id} word={w.word}/>
                    })
                }
                </FlipMove>
             </div>
        );
    }
