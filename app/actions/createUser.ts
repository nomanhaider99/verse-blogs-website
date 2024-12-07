import { FieldValues } from "react-hook-form";

export const createUser = async (data: FieldValues) => {
    const {
        name,
        email,
        password
    } = data;
    const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });

    const result = await res.json();
    return result;
}