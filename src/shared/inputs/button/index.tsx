import React from 'react';
import Button from '@mui/material/Button';
import { ButtonType } from './buttonType';
import { Link } from 'react-router-dom';

export const RegularButton: React.FC<ButtonType> = ({
        children,
        classes,
        color, disabled,
        endIcon,
        fullWidth,
        size,
        startIcon,
        sx,
        variant,
        onClick
}) => {
    return <Button
        classes={ classes }
        color={ color ?? 'success' }
        onClick={ onClick }
        variant={ variant ?? 'contained' }
        size={ size ?? 'small' }
        fullWidth={ fullWidth }
        disabled={ disabled }
        startIcon={ startIcon }
        endIcon={ endIcon }
        sx={ sx }
    >
        { children }
    </Button>
}

export const TextButton: React.FC<ButtonType> = ({
    children,
    classes,
    color, disabled,
    endIcon,
    fullWidth,
    size,
    startIcon,
    sx,
    onClick
}) => {
    return <Button
        classes={ classes }
        color={ color ?? 'primary' }
        onClick={ onClick }
        variant={ 'text' }
        size={ size ?? 'small' }
        fullWidth={ fullWidth }
        disabled={ disabled }
        startIcon={ startIcon }
        endIcon={ endIcon }
        sx={ sx }
    >
        { children }
    </Button>
}

export const LinkButton: React.FC<ButtonType> = ({
    children,
    classes,
    color, disabled,
    endIcon,
    fullWidth,
    href,
    size,
    startIcon,
    sx,
    variant,
    onClick
}) => {
    return <Button
        classes={ classes }
        color={ color ?? 'primary' }
        onClick={ onClick }
        variant={ variant?? 'contained' }
        size={ size ?? 'small' }
        fullWidth={ fullWidth }
        disabled={ disabled }
        startIcon={ startIcon }
        endIcon={ endIcon }
        sx={ sx }
    >
        <Link to={ href ?? '/' } style={{ textDecoration: 'none', color: 'inherit' }}>
            { children }
        </Link>
    </Button>
}