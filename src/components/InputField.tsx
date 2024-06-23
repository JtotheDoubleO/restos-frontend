'use client';

import Image from 'next/image';
import React from 'react';

import Hint from '@/components/hint/Hint';

type IInputWithLabelProps =
  | {
      withLabel: true;
      label: string;
      leftIconSrc: string;
      rightIconSrc: string;
      placeholder: string;
    }
  | {
      withLabel?: false;
      leftIconSrc: string;
      rightIconSrc: string;
      placeholder: string;
    };

const InputWithLabel = (props: IInputWithLabelProps) => (
  <div className="mb-4 rounded-[40px]">
    {props.withLabel && (
      <label htmlFor="input" className="text-sm font-medium text-slate-700">
        {props.label}
      </label>
    )}
    <div className="flex items-center justify-start gap-2 rounded-lg border border-gray-50 bg-gray-50 p-2 px-3">
      <div className="flex shrink grow basis-0 items-center justify-start gap-2">
        <Image
          src={props.leftIconSrc}
          alt="Input left icon"
          width={24}
          height={24}
        />
        <input
          id="input"
          type="text"
          placeholder={props.placeholder}
          className="placeholder::text-zinc-300 grow bg-transparent p-2 text-zinc-700 focus:outline-none"
        />
      </div>
      {props.rightIconSrc !== '' && (
        <Image
          src={props.rightIconSrc}
          alt="Input right icon"
          width={24}
          height={24}
        />
      )}
    </div>
  </div>
);

type IInputFieldProps =
  | {
      withHint: true;
      hint: string;
      leftIconSrc: string;
      rightIconSrc: string;
      placeholder: string;
    }
  | {
      withHint?: false;
      leftIconSrc: string;
      rightIconSrc: string;
      placeholder: string;
    };

const InputField = (props: IInputFieldProps) => (
  <div className="rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
    <InputWithLabel
      leftIconSrc={props.leftIconSrc}
      rightIconSrc={props.rightIconSrc}
      placeholder={props.placeholder}
    />
    {props.withHint && <Hint>{props.hint}</Hint>}
  </div>
);

export { InputField };
