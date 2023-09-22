import {notification} from "antd";
import {SetOpenType} from "../../../types/common/CommonTypes";
/**
 *
 * @param setOpen - функция drawer
 * @param error (ErrorType | null) - ошибка, хз как по другому сделать
 * @param message - custom message for output
 * @returns
 */
export const notifyAndCloseDrawer = (
    setOpen: SetOpenType,
    error: any,
    message?: string
) => {
    if (error === null) {
        setTimeout(() => {
            notification.success({
                message: message ? message : "Данные успешно сохранены",
            });
            setOpen(false);
        }, 1000);
    } else {
        setTimeout(() => {
            notification.error({
                message: "Ошибка " + error.status,
                description: error.message,
            });
        }, 1000);
        throw error;
    }
};

export const notifyRequest = (error: any, message?: string) => {
    if (error === null) {
        setTimeout(() => {
            notification.success({
                message: message ? message : "Вы успешно вошли в Refook",
            });
        }, 1000);
    } else {
        setTimeout(() => {
            notification.error({
                message: "Ошибка " + error.status,
                description: error.message,
            });
        }, 1000);
        throw error;
    }
};