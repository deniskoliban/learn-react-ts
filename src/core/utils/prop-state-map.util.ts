import { Dispatch, useState } from 'react';

type PropsMap<T> = { [P in keyof T]: { value: T[P], set: Dispatch<T[P]> } };

export function propsStateMap<T>(props: T): PropsMap<T> {
    let result: PropsMap<T>;
    (Object.keys(props) as Array<keyof T>).forEach((key) => {
        const [value, set] = useState(props[key]);
        result = { ...result, [key]: { value, set } }
    })
    return result!;
}

export function propsStateVal<T>(props: PropsMap<T>): T {
    let result: T;
    (Object.keys(props) as Array<keyof T>).forEach((key) => {
        result = { ...result, [key]: props[key].value }
    })
    return result!;
}

