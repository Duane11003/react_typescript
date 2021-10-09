import React, { useState, useRef } from 'react'

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text?: string;
    ok?: boolean;
    i?: number;
    fn?: () => void;
    person?: Person;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode{
    text: string;
}

const Textfield: React.FC<Props> = ({text, handleChange}) => {

    const [count, setCount] = useState<TextNode>({text: 'hello'}); // this state that we're storing here can be a number or null
    const inputRef = useRef<HTMLInputElement>(null);


    return (
        <div>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}


export default Textfield;