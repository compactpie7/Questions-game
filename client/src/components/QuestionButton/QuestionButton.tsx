import React, { ElementType, ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import './styles.css';

type QuestionButtonProps<T extends ElementType = 'button'> = PropsWithChildren<{
    as?: T;
}> &
    ComponentPropsWithoutRef<T>; // pass all props like onClick, whileTap, etc.

const QuestionButton = <T extends ElementType = 'button'>({
    as,
    children,
    ...props
}: QuestionButtonProps<T>) => {
    const Component = as || 'button';
    return (
        <Component className="question-button" {...props}>
            {children}
        </Component>
    );
};

export default QuestionButton;
