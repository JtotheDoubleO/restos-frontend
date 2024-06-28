'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { mergeClassnames } from '@/components/private/utils';
import { useAppDispatch, useAppSelector } from '@/libs/hooks';
import { setQuery } from '@/libs/store/query';
import { textByRestoCategory } from '@/utils/TextHelpers';

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

const toArray = (obj: object) => {
  return Object.entries(obj).map((entry) => {
    return {
      value: entry[0],
      label: entry[1],
    };
  });
};

const FilterTags = () => {
  const FilterTabItems = toArray(textByRestoCategory);

  const t = useTranslations('Search');

  const qByCategory = useAppSelector((state) => state.query.category);

  const dispatch = useAppDispatch();

  const handleClick = (value: string) => {
    // setCurrentTag(value);
    dispatch(setQuery({ category: value }));
  };

  return (
    <div className="flex overflow-x-scroll scrollbar-hide">
      <div className="flex flex-nowrap items-center justify-start gap-1">
        <FilterTabItem
          value="all"
          label={t('filter_all')}
          isActive={qByCategory === 'all'}
          onClick={handleClick}
        />
        {FilterTabItems.map((item, index) => (
          <FilterTabItem
            key={index}
            {...item}
            isActive={qByCategory === item.value}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export { FilterTags };
