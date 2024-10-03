import React from 'react'

interface Props {
    value?: number;
}


export const useCounter = ({ value = 0 }: Props) => {

    const [counter, setCounter] = React.useState(value);

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }


    return {
        counter,
        increment,
        decrement
    }
}
