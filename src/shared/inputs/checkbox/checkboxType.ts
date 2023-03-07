import React from 'react';
import { SxProps } from '@mui/material/styles';

export interface CheckboxType {
    /**
     * Если true, то компонент проверяется.
     */
    checked?: boolean;
    /**
     * Значок, отображаемый при проверке компонента.
     */
    checkedIcon?: React.ReactNode;
    /**
     * Переопределить или расширить стили, применяемые к компоненту.
     */
    classes?: object;
    /**
     * Цвет компонента.
     */
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
    /**
     * Проверенное состояние по умолчанию. Используется, когда компонент не контролируется.
     */
    defaultChecked?: boolean;
    /**
     * Если true, то компонент отключен.
     */
    disabled?: boolean;
    /**
     * Значок, отображаемый при снятии флажка с компонента.
     */
    icon?: React.ReactNode;
    /**
     * Идентификатор элемента ввода.
     */
    id: string;
    /**
     * Атрибуты, применяемые к элементу ввода.
     */
    inputProps?: object;
    /**
     * Передача ссылки на элемент ввода.
     */
    inputRef?: React.RefObject<HTMLInputElement>;
    /**
     * Обратный вызов, выполняемый при изменении состояния.
     * @param event
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Если true, то элемент ввода обязателен.
     */
    required?: boolean;
    /**
     * Размер компонента.
     */
    size?: 'small' | 'medium';
    /**
     * Системный реквизит, позволяющий определять системные переопределения, а также дополнительные стили CSS.
     */
    sx?: SxProps;
    /**
     * Значение компонента.
     */
    value: any;
}