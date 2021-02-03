import {DropTarget} from "react-dnd";
import {PutWords} from '../unnecessary/PutWords/PutWords';

const PutWordsSpec = {
    drop() {
        return {
            name: 'yo'
        }
    }
}
let collect = (connect:any, monitor:any) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

export default DropTarget('word', PutWordsSpec, collect)(PutWords)
