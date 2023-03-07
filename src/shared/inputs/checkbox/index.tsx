import React from 'react';
import { CheckboxType } from './checkboxType';
import Checkbox from '@mui/material/Checkbox';

export const RegularCheckbox: React.FC<CheckboxType> = ({
    classes,
    size,
    color,
    defaultChecked,
    disabled,
    icon,
    checkedIcon,
    id,
    sx,
    inputProps,
    inputRef,
    required,
    value,
    onChange,
    checked
}) => {
    return <Checkbox
        size={ size ?? 'small' }
        color={ color ?? 'primary' }
        defaultChecked={ defaultChecked ?? false }
        disabled={ disabled ?? false }
        icon={ icon }
        checkedIcon={ checkedIcon }
        id={ id }
        sx={ sx }
        inputProps={ inputProps }
        inputRef={ inputRef }
        required={ required ?? false}
        value={ value }
        onChange={ onChange }
        checked={ checked }
    />
}