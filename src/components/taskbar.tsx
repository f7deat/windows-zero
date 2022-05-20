import { ITaskbarItemProps } from "./props/taskbar-item-props"

export default function TaskBar(props: any) {
    return (
        <div className="bg-gray-800 w-full h-12 flex">
            <div className="flex-grow flex">
                <div className="flex h-12 w-12 items-center justify-center text-white hover:text-blue-500" onClick={() => props.toggleStartBar()}>
                    <i className="fab fa-windows"></i>
                </div>
                <div className="flex border-t ">
                    <button className="h-12 w-12 flex justify-center items-center bg-white text-gray-800"><i className="fa fa-search"></i></button>
                    <input className="h-12 w-64 bg-white pr-2" placeholder="Type here to search" />
                </div>
                <TaskbarItem icon="fas fa-folder" />
            </div>
            <div className="flex justify-end">
                <div className="flex justify-center px-2 items-center text-white hover:bg-gray-700 text-sm">
                    <i className="fas fa-chevron-up"></i>
                </div>
                <div className="flex justify-center px-2 items-center text-white hover:bg-gray-700 text-sm">
                    <i className="fas fa-battery-half"></i>
                </div>
                <div className="flex justify-center px-2 items-center text-white hover:bg-gray-700 text-sm">
                    <i className="fas fa-wifi"></i>
                </div>
                <div className="flex justify-center px-2 items-center text-white hover:bg-gray-700">
                    <i className="fas fa-volume-down"></i>
                </div>
                <div className="flex justify-center px-2 items-center text-white hover:bg-gray-700 text-xs">
                    ENG
                </div>
                <div className="flex flex-col justify-center items-center text-white text-xs hover:bg-gray-700 px-2">
                    <div>
                        {`${new Date().getHours()}:${new Date().getMinutes()} PM`}
                    </div>
                    <div>
                        {`${new Date().getUTCMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`}
                    </div>
                </div>
                <TaskbarItem icon="fas fa-envelope-open-text" />
                <div className="pl-1 border-l border-gray-500"></div>
            </div>
        </div>
    )
}

const TaskbarItem = (props: ITaskbarItemProps) => (
    <div className="flex h-12 w-14 items-center justify-center text-white hover:text-blue-500">
        <i className={props.icon}></i>
    </div>
)