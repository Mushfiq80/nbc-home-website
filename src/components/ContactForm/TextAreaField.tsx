import React from 'react';

interface TextAreaFieldProps {
    label: string;
    name: string;
    placeholder: string;
    required: boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, placeholder, required }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <textarea
                name={name}
                placeholder={placeholder}
                required={required}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                rows={4}
            />
        </div>
    );
};

export default TextAreaField;