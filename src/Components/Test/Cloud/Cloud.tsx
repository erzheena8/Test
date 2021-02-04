import React from 'react'
import classes from './Cloud.module.sass'
import {useDrag} from "react-dnd";
import {ItemType} from "../../../utils/item";

type CloudPropsType = {
    id: number
    isOver?: boolean
}

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
            <div className={`${classes.cloudItem} ${isDragging&&classes.hidden}`}
                 ref={drag}>{children}
            </div>
        );

    }

// style={isDragging?{transform:'translateY(-70px)'}:{}}
