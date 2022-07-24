
import { toast } from "react-toastify";
import { Sticker } from "./types";
import { getToastError, getToastSuccess } from "./utils";

export default function generateSticker(stickerData: Sticker) {
    const toastify = toast.loading("Gerando Sticker...".concat(String.fromCodePoint(Number.parseInt("0x1F525"))));

    const request: RequestInit = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(stickerData)
    }

    return fetch("http://localhost:8080/image", request)
        .then(res => {
            if (res.ok) {
                return res.blob();
            }

            toast.update(toastify, getToastError("Erro ao gerar sticker, verifique a URL informada."
                .concat(String.fromCodePoint(Number.parseInt("0x1F622")))));

            throw new Error("Erro ao gerar sticker");
        })
        .then(blob => {
            toast.update(toastify, getToastSuccess("Sticker gerado com sucesso!"
                .concat(String.fromCodePoint(Number.parseInt("0x1F60E")))));

            return URL.createObjectURL(blob)
        })
        .catch(() => {
            toast.update(toastify, getToastError("Erro ao gerar sticker, verifique a URL informada."
                .concat(String.fromCodePoint(Number.parseInt("0x1F622")))));

            throw new Error("Erro ao gerar sticker");
        })
}