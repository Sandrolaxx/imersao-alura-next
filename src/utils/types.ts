export interface InputProps {
    labelText: string;
    imagePath?: string;
    handleChangeValue: Function;
    isToggle?: boolean;
}

export interface ButtonProps {
    text: string;
    handleFunction: () => void;
}

export type Sticker = {
    imagePath: string;
    imageText: string;
    textInsideImage: boolean;
    originalSize: boolean;
}