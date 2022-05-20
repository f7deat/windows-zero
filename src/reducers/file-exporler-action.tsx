import { FILE_EXPORLER_CLOSE } from "./action-type";

export function exitFileExporler(hidden: boolean) {
    return {
      type: FILE_EXPORLER_CLOSE,
      payload: hidden
    }
  }