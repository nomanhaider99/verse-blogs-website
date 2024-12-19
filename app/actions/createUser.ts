import { FieldValues } from "react-hook-form";

export const createUser = async (data: FieldValues  ) => {
    const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Failed to create user.');
    }

    return res.json();
};
