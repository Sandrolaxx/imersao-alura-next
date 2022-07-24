import { InputProps } from "../utils/types";

export default function Input({ imagePath, handleChangeValue, labelText, isToggle }: InputProps) {
    return (
        isToggle ?
            <div className="flex mt-4">
                <div className="relative  w-10 mr-2 align-middle select-none">
                    <input type="checkbox" name="toggle" id={labelText} onChange={() => handleChangeValue()}
                        className={`checked:bg-blue-400 outline-none focus:outline-none right-4 checked:right-0 duration-200 
                        ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`} />
                    <label for={labelText} className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                    </label>
                </div>
                <span className="text-gray-400 font-medium">
                    {labelText}
                </span>
            </div>
            :
            <>
                <span className='w-4/5'>
                    <p className="my-1">{labelText}</p>
                    <input className="w-full h-8 px-2 rounded-md border-2 border-slate-300 focus:outline-none focus:border-blue-400"
                        value={imagePath} onChange={e => handleChangeValue(e.target.value)} />
                </span>
            </>
    )
}