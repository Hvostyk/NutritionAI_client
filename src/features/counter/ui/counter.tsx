"use client";

import { useState } from "react";

import { useAppSelector, useAppDispatch } from "@/shared/lib/redux-hooks";

import {
    increment,
    decrement,
    reset,
    incrementByAmount,
} from "../model/counter-slice";

export const Counter = () => {
    const count = useAppSelector((state) => state.counter.value);
    const history = useAppSelector((state) => state.counter.history);
    const dispatch = useAppDispatch();
    const [incrementValue, setIncrementValue] = useState(2);

    return (
        <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Counter</h2>
            <div className="flex items-center justify-center mb-4">
                <button
                    onClick={() => dispatch(decrement())}
                    className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center"
                >
                    -
                </button>
                <span className="mx-4 text-2xl font-bold">{count}</span>
                <button
                    onClick={() => dispatch(increment())}
                    className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center"
                >
                    +
                </button>
            </div>
            <div className="flex items-center gap-2 mb-4">
                <input
                    type="number"
                    value={incrementValue}
                    onChange={(e) => setIncrementValue(Number(e.target.value))}
                    className="border p-2 rounded w-20"
                />
                <button
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Amount
                </button>
                <button
                    onClick={() => dispatch(reset())}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Reset
                </button>
            </div>
            <div>
                <h3 className="font-semibold mb-2">History:</h3>
                <ul className="max-h-32 overflow-y-auto">
                    {history.map((action, index) => (
                        <li key={index} className="text-sm py-1 border-b">
                            {action}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
