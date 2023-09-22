import { SendFunctionType, SetOpenType } from "../types/common/CommonTypes";
import { useRefookNotification } from "./useRefookNotification";

export const useCRUDSender = (
  sendFunction: SendFunctionType,
  setOpen?: SetOpenType,
  notifyMessage?: string
): SenderType => {
  const { notifyAndCloseDrawer, notifyRequest } = useRefookNotification();
  return async (body: Object) => {
    const res = await sendFunction(body);
    if (setOpen !== undefined) {
      return notifyAndCloseDrawer(setOpen, res, notifyMessage);
    } else {
      return notifyRequest(res, notifyMessage);
    }
  };
};

export type SenderType = (body: Object) => Promise<boolean>;
