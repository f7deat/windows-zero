import { FILE_EXPORLER_CLOSE } from "./action-type"

const initialState = {
    hidden: false
}

const FileExporlerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FILE_EXPORLER_CLOSE:
            return {
                ...state,
                hidden: action.payload
            }
        default:
            return state
    }
}

export default FileExporlerReducer