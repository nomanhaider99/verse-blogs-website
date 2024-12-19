'use client'

import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from './label'

const Gender = () => {
    const [gender, setGender] = useState<'male' | 'female' | null>(null);

    const handleMaleChange = () => {
        setGender(gender === 'male' ? null : 'male'); 
    };

    const handleFemaleChange = () => {
        setGender(gender === 'female' ? null : 'female'); 
    };

    return (
        <div className='w-full flex items-center gap-4'>
            {/* For Male */}
            <div className='flex items-center gap-1'>
                <Checkbox
                    checked={gender === 'male'}
                    onCheckedChange={handleMaleChange}
                />
                <Label>Male</Label>
            </div>

            {/* For Female */}
            <div className='flex items-center gap-1'>
                <Checkbox
                    checked={gender === 'female'}
                    onCheckedChange={handleFemaleChange}
                />
                <Label>Female</Label>
            </div>
        </div>
    );
};

export default Gender;
