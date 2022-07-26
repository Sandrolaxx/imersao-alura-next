
import { toast } from "react-toastify";
import { Sticker } from "./types";
import { getToastError, getToastSuccess } from "./utils";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiToken = process.env.NEXT_PUBLIC_TOKEN_PASSWORD;

export default function generateSticker(stickerData: Sticker) {
    const toastify = toast.loading("Gerando Sticker...".concat(String.fromCodePoint(Number.parseInt("0x1F525"))));

    const request: RequestInit = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic ".concat(apiToken!)
        },
        method: "POST",
        body: JSON.stringify(stickerData)
    }

    return fetch(baseUrl!, request)
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