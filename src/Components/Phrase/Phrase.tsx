import React from 'react'
import classes from './Phrase.module.sass'
import image from '../../access/image/user.png'

type PhrasePropsType = {
    text: string
}

export const Phrase:React.FC<PhrasePropsType> = ({text}) => {
    return (
        <div className={classes.phrase}>
            <img src={image}/>
            <div className={classes.phraseText}>
                {text}
            </div>
        </div>
    );

}

