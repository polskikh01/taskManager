import React from 'react';
import { AvatarType, AvatarGroupProps } from './avatarType';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export const RegularAvatar: React.FC<AvatarType> = ({
    alt,
    children,
    classes,
    imgProps,
    src,
    sx
}) => {
    return <Avatar
        alt={ alt }
        src={ src }
        classes={ classes }
        imgProps={ imgProps }
        sx={ sx }
        variant={ 'circular' }
        children={ children ?? null }
    />
}

export const RegularAvatarGroup: React.FC<AvatarGroupProps> = ({
    children,
    classes,
    max,
    spacing,
    sx,
    total
}) => {
    return <AvatarGroup
        classes={ classes }
        max={ max ?? 5 }
        spacing={ spacing ?? 'small' }
        sx={ sx }
        total={ total ?? 5 }
    >
        { children }
    </AvatarGroup>
}