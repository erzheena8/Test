import React, {forwardRef, RefAttributes} from 'react'
import IntrinsicAttributes from 'react-flip-move'
import classes from './Cloud.module.sass'
import {useDrag} from 'react-dnd';
import {ItemType} from '../../../utils/item';
import FlipMove from "react-flip-move";

type CloudPropsType = {
    id: number
    isOver?: boolean
    word?: string
}

export type ItemDragType = {
    type: string
    id: number
}
export const CloudContainer =
    forwardRef<IntrinsicAttributes & RefAttributes<FlipMove> & RefAttributes<unknown>, CloudPropsType>
    ((props, ref) => (
        //@ts-ignore
    <div ref={ref&&ref}  className={classes.cloudItemContainer}>  {/*not null*/}
        <Cloud {...props}> {props.word} </Cloud>
    </div>
))
export const Cloud: React.FC<CloudPropsType> =
    ({
         children,
         id,
         ...otherProps

     }) => {
        const [{isDragging}, drag] = useDrag({
            item: {
                type: ItemType.WORD,
                id: id
            },
            collect: monitor => ({
                isDragging: !!monitor.isDragging()
            })
        })
        return (

            <div className={`${classes.cloudItem} ${isDragging&&classes.hidden} ${otherProps.isOver&&classes.over} `} ref={drag}>
                {children}
            </div>
        );
    }

