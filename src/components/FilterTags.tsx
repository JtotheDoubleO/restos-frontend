'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { mergeClassnames } from '@/components/private/utils';

type IFilterTabItemProps = {
  isActive?: boolean;
  value: string;
  label: string;
  onClick: (value: string) => void;
};

const FilterTabItem = (props: IFilterTabItemProps) => {
  return (
    <button
      type="button"
      onClick={() => props.onClick(props.value)}
      className={mergeClassnames(
        'inline-flex justify-center items-center mb-3 h-9 flex-grow-0 flex-shrink-0 rounded-md bg-gray-50 px-3',
        'text-sm font-semibold capitalize leading-tight text-gray-500',
        props.isActive && 'text-slate-700',
      )}
    >
      {props.label}
    </button>
  );
};

const TemporaryFilterTabItems = [
  { label: '스시·해산물', value: 'sushi' },
  { label: '장어', value: 'unagi' },
  { label: '덴푸라', value: 'tempura' },
  {
    label: '돈카츠·쿠시카츠',
    value: 'tonkatsu',
  },
];

const FilterTags = () => {
  const t = useTranslations('Search');

  const [currentTag, setCurrentTag] = useState('all');

  return (
    <div className="flex overflow-x-scroll scrollbar-hide">
      <div className="flex flex-nowrap items-center justify-start gap-1">
        <FilterTabItem
          value="all"
          label={t('filter_all')}
          isActive={currentTag === 'all'}
          onClick={(value) => setCurrentTag(value)}
        />
        {TemporaryFilterTabItems.map((item, index) => (
          <FilterTabItem
            key={index}
            {...item}
            isActive={currentTag === item.value}
            onClick={(value) => setCurrentTag(value)}
          />
        ))}
      </div>
    </div>
  );
};

export { FilterTags };
