import {DragSource} from "react-dnd";
import {CloudsWords} from "../unnecessary/CloudsWords/CloudsWords";

const CloudWordSpec = {
    beginDrag(props:any) {
        return {
            name: props.name
        }
    },
    endDrag(props: any, monitor: any) {
        const dragItem = monitor.getItem()
        const dropResult = monitor.getDropResult()
        if (dropResult) {
            console.log(`You dropped${dragItem} into ${dropResult}`)
        }
    }
}

let collect = (connect:any, monitor:any) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

export default DragSource('word', CloudWordSpec, collect)(CloudsWords)
