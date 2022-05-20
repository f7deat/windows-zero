import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { createStore } from "redux";
import { exitFileExporler } from "../../reducers/file-exporler-action";
import rootReducer from "../../reducers/rootReducer";


const store = createStore(rootReducer)

export default function FileExporler() {

    const nodeRef = useRef(null);

    const [visible, setVisible] = useState(store.getState().FileExporlerReducer.hidden)

    const exit = () => {
        store.dispatch(exitFileExporler(true))
    }

    store.subscribe(() => {
        setVisible(store.getState().FileExporlerReducer.hidden)
    })

    return (
        <Draggable nodeRef={nodeRef}>
            <div className="h-96 shadow m-8 bg-white rounded" ref={nodeRef} style={{width: 'calc(100vw - 60%)'}} hidden={visible}>
                <div className="flex justify-end text-sm">
                    <div className="py-1 px-2 text-gray-600 hover:text-gray-800">
                        <i className="fas fa-minus"></i>
                    </div>
                    <div className="py-1 px-2 text-gray-600 hover:text-gray-800">
                        <i className="far fa-square"></i>
                    </div>
                    <div className="py-1 px-2 text-red-500 hover:text-red-600" onClick={exit}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                <div className="flex text-sm border-b">
                    <div className="px-4 py-1 bg-blue-500 text-white hover:bg-blue-600">
                        File
                    </div>
                    <div className="px-4 py-1 hover:bg-blue-600 hover:text-white">
                        Home
                    </div>
                    <div className="px-4 py-1 hover:bg-blue-600 hover:text-white">
                        Share
                    </div>
                    <div className="px-4 py-1 hover:bg-blue-600 hover:text-white">
                        View
                    </div>
                </div>
                <div className="flex text-gray-600 text-sm bg-gray-100">
                    <div className="pl-2 pr-1 py-1">
                        <i className="fas fa-long-arrow-alt-left"></i>
                    </div>
                    <div className="pr-2 pl-1 py-1 text-gray-300">
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                    <div className="py-1 flex-grow">
                        <i className="fas fa-folder"></i>
                    </div>
                    <div className="flex items-center">
                        <i className="fas fa-search px-2"></i>
                        <input type="text" className="py-1 bg-gray-200"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/5"></div>
                    <div className="w-4/5">

                    </div>
                </div>
            </div>
        </Draggable>
    )
}