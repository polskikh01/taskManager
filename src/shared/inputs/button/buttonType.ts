import React from 'react';
import { SxProps } from '@mui/material/styles';

export interface ButtonType {
    /**
     * Содержимое компонента.
     */
    children: React.ReactNode;
    /**
     * Переопределить или расширить стили, применяемые к компоненту.
     */
    classes?: object;
    /**
     * Цвет компонента.
     */
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    /**
     * Если true, то компонент отключен.
     */
    disabled?: boolean;
    /**
     * Элемент, расположенный после детей.
     */
    endIcon?: React.ReactNode;
    /**
     * Если значение равно true, кнопка будет занимать всю ширину своего контейнера.
     */
    fullWidth?: boolean;
    /**
     * URL-адрес, на который нужно ссылаться при нажатии на кнопку.
     */
    href?: string;
    /**
     * Размер компонента.
     */
    size?: 'small' |'medium' | 'large';
    /**
     * Элемент, расположенный перед детьми.
     */
    startIcon?: React.ReactNode;
    /**
     * Системный реквизит, позволяющий определять системные переопределения, а также дополнительные стили CSS.
     */
    sx?: SxProps;
    /**
     * Вариант для использования.
     */
    variant?: 'contained' | 'text';
    onClick: () => void;
}