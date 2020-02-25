import React from 'react';
import TextField from "@material-ui/core/TextField";

function Input({inputType, inputClassName, fieldName, fieldType, getDataField, title}) {

    const handleChange = (event) => {
        switch (fieldType) {
            case 'name':
                getDataField({name: event.target.value});
                break;
            case 'email':
                getDataField({email: event.target.value});
                break;
            case 'note':
                getDataField({note: event.target.value});
                break;
            default:
                getDataField('');
        }
    };
    return (
        <>
            <p className={'title'}>{title}</p>
            {inputType === 'textarea' ? (
            <TextField className={inputClassName} multiline rows="4"
                       onChange={handleChange}
                       type={inputType} label={fieldName}
                       variant={'outlined' }/>
            ):(
            <TextField onChange={handleChange} className={inputClassName}
                       type={inputType} label={fieldName}
                       variant={'outlined' }
            />
            )}

        </>
    );
}

export default Input;