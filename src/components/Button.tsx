import { ButtonProps } from "../utils/types";

export default function Button({ text, handleFunction }: ButtonProps) {
    return (
        <button onClick={handleFunction} className={`w-24 h-12 my-6 bg-blue-400 
            text-xl font-semibold text-white rounded-md`}>
            {text}
        </button>
    );
}