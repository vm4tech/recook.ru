import { SendFunctionType, SetOpenType } from "../types/common/CommonTypes";
import { useRecookNotification } from "./useRecookNotification";

export const useCRUDSender = (
  sendFunction: SendFunctionType,
  setOpen?: SetOpenType,
  notifyMessage?: string
): SenderType => {
  const { notifyAndCloseDrawer, notifyRequest } = useRecookNotification();
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
