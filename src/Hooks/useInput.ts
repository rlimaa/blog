import { ChangeEvent, RefObject, useRef } from "react";

export default function useInput<T extends HTMLInputElement | HTMLTextAreaElement>(initialValue: T | null): [ RefObject<T>, (e: ChangeEvent<T>) => void, () => void] {
    const ref = useRef<T>(initialValue);

    const setValue = (e: ChangeEvent<T>): void => {
        if(ref.current)
            ref.current.value = e.currentTarget.value;
    }

    const resetValue = (): void => {
        if(ref.current)
            ref.current.value = "";
    }

    return [ref, setValue, resetValue];
}