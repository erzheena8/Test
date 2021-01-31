import React from 'react'
import classes from './Cloud.module.sass'
import {PhraseEnType} from "../../../../App";

type CloudPropsType = {
    word: PhraseEnType
    clickHandler: (currentWord: PhraseEnType) => void

}

export const Cloud: React.FC<CloudPropsType> =
    ({
         word,
         children,
         clickHandler
     }) => {

        return (
            <div className={classes.cloudItem} onClick={()=>clickHandler(word)}>
                {children}
            </div>
        );

    }



// type CloudPropsType = {
//     onDragStart: (e: React.DragEvent<HTMLDivElement>, word: PhraseEnType) => void
//     onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void
//     onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void
//     onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
//     onDrop: (e: React.DragEvent<HTMLDivElement>, word: PhraseEnType) => void
//     onDrag: (e: React.DragEvent<HTMLDivElement>, word: PhraseEnType) => void
//     word: PhraseEnType
// }
//
// export const Cloud: React.FC<CloudPropsType> =
//     ({
//          word,
//          onDragStart,
//          onDragLeave,
//          onDragEnd,
//          onDragOver,
//          onDrop,
//          onDrag,
//          children
//      }) => {
//
//         return (
//             <div className={classes.cloudItem}
//                  draggable={"true"}
//                  onDragStart={(e) => onDragStart(e, word)}
//                  onDragLeave={(e) => onDragLeave(e)}
//                  onDragEnd={(e) => onDragEnd(e)}
//                  onDragOver={(e) => onDragOver(e)}
//                  onDrop={(e) => onDrop(e, word)}
//                  onDrag={(e) => onDrag(e, word)}>
//                 {children}
//             </div>
//         );
//
//     }