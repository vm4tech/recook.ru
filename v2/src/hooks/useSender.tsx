import {useRefookNotification} from "./useRefookNotifications";
import {SendFunctionType, SetOpenType} from "../types/common/CommonTypes";
import {ErrorType} from "../types/common/ErrorType";

export const useSender = (
    sendFunction: SendFunctionType,
    setOpen?: SetOpenType,
    notifyMessage?: string
): SenderType => {
    const { notifyAndCloseDrawer, notifyRequest } = useRefookNotification();
    return async (body: Object) => {
        const res = await send(sendFunction, body);
        if (setOpen !== undefined) {
            return notifyAndCloseDrawer(setOpen, res, notifyMessage);
        } else {
            return notifyRequest(res, notifyMessage);
        }
    };
};


const send = async (sendFunction: SendFunctionType, body: Object): Promise<ErrorType | null> => {
    try {
        await sendFunction(body);
        return null;
    } catch (err: any){
        return err;
    }
}

/**
 * throw error, if error != null
 */
export type SenderType = (body: Object) => Promise<void>;
