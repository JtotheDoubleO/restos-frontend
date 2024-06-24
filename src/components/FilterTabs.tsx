'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { mergeClassnames } from '@/components/private/utils';

type IFilterTabItemProps = {
  isActive?: boolean;
  label: string;
};

const FilterTabItem = ({ label, isActive }: IFilterTabItemProps) => (
  <div
    className={mergeClassnames(
      'inline-flex justify-center items-center mb-3 h-9 flex-grow-0 flex-shrink-0 rounded-md bg-gray-50 px-3',
      'text-sm font-semibold capitalize leading-tight text-gray-500',
      isActive && 'text-slate-700',
    )}
  >
    {label}
  </div>
);

const TemporaryFilterTabItems = [
  { label: '스시·해산물', value: 'sushi' },
  { label: '장어', value: 'unagi' },
  { label: '덴푸라', value: 'tempura' },
  {
    label: '돈카츠·쿠시카츠',
    value: 'tonkatsu',
  },
];

const FilterTabs = () => {
  const t = useTranslations('Search');

  return (
    <div className="flex overflow-x-scroll scrollbar-hide">
      <div className="flex flex-nowrap items-center justify-start gap-1">
        <FilterTabItem label={t('filter_all')} isActive />
        {TemporaryFilterTabItems.map((item, index) => (
          <FilterTabItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export { FilterTabs };
