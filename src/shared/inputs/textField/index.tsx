import React from 'react';
import TextField from '@mui/material/TextField';
import { TextFieldType } from './textFieldType';

export const RegularTextField: React.FC<TextFieldType> = ({
    classes,
    size,
    select,
    value,
    onChange,
    color,
    id,
    sx,
    inputProps,
    inputRef,
    required,
    disabled,
    helperText,
    autofocus,
    error,
    fullWidth,
    inputLabelProps,
    defaultValue,
    label,
    margin,
    maxRows,
    minRows,
    InputProps,
    name,
    multiline,
    rows,
    placeholder,
    type,
    variant,
    selectProps,
    autocomplete
}) => {
    return <TextField
        autoComplete={ autocomplete }
        autoFocus={ autofocus ?? false }
        classes={ classes }
        color={ color ?? 'primary' }
        defaultValue={ defaultValue }
        disabled={ disabled }
        helperText={ helperText }
        error={ error }
        fullWidth={ fullWidth }
        id={ id }
        InputLabelProps={ inputLabelProps }
        inputProps={ inputProps }
        InputProps={ InputProps }
        inputRef={ inputRef }
        label={ label }
        margin={ margin ?? 'none' }
        maxRows={ maxRows }
        minRows={ minRows }
        multiline={ multiline ?? false }
        name={ name }
        onChange={ onChange }
        placeholder={ placeholder }
        required={ required }
        rows={ rows }
        select={ select }
        SelectProps={ selectProps }
        size={ size ?? 'small' }
        sx={ sx }
        type={ type }
        value={ value }
        variant={ variant ?? 'outlined' }
    />
}