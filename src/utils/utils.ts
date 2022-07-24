import { UpdateOptions } from "react-toastify";

export function getToastError(msg: string): UpdateOptions {
    return {
        render: msg,
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeButton: true
    };
}

export function getToastSuccess(msg: string): UpdateOptions {
    return {
        render: msg,
        type: "success",
        isLoading: false,
        autoClose: 5000,
        closeButton: true
    };
}