import React from 'react'
import classes from './Cloud.module.sass'
import {PhraseEnType} from "../../../App";
import {useDrag} from "react-dnd";
import {ItemType} from "../../../utils/item";

type CloudPropsType = {
    id: number
}

export const Cloud: React.FC<CloudPropsType> =
    ({
         children,
         id

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
            // <div className={classes.emptyCloudItem}>
                 <div className={`${classes.cloudItem} ${isDragging && classes.hidden}`}
                              ref={drag}>{children}</div>
            // </div>
        );

    }


