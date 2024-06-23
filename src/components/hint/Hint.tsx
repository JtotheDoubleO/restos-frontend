import React from 'react';

import { useFormItemContext } from '../form/private/utils';
import { mergeClassnames } from '../private/utils';
import type HintProps from './private/types';

const Hint = ({
  children,
  error: hintError,
  disabled,
  className,
}: HintProps) => {
  const { error: formItemError } = useFormItemContext('Hint');
  const error = hintError || formItemError;

  return (
    <p
      role="alert"
      className={mergeClassnames(
        'text-slate-600 text-sm font-normal leading-tight',
        error ? 'text-chichi' : 'text-trunks',
        disabled && 'opacity-60 cursor-not-allowed',
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Hint;
