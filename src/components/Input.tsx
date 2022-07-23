import { InputProps } from "../utils/types";

export default function Input({ imagePath, handleChangeValue, labelText }: InputProps) {
    return (
        <span className='w-4/5'>
            <p className="my-1">{labelText}</p>
            <input className="w-full h-8 px-2 rounded-md border-2 border-slate-300 focus:outline-none focus:border-blue-400"
                value={imagePath} onChange={e => handleChangeValue(e.target.value)} />
        </span>
    )
}