'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { mergeClassnames } from '@/components/private/utils';
import { usePathname } from '@/libs/i18nNavigation';

type ITabBarItemProps = {
  isActive: boolean;
  iconSrc: string;
  label: string;
  value: string;
};

const TabBarItem = ({ isActive, iconSrc, label, value }: ITabBarItemProps) => (
  <Link
    href={value}
    className={mergeClassnames(
      'flex flex-col items-center capitalize text-zinc-600',
      isActive && 'text-orange-500',
    )}
  >
    <Image
      src={iconSrc}
      alt="Home icon"
      width={24}
      height={24}
      className={mergeClassnames(isActive && 'active-icon')}
    />
    {label}
  </Link>
);

const TabBarItems = [
  {
    label: 'home_link' as const,
    value: '/',
    iconSrc: '/assets/images/icons/home.svg',
  },
  {
    label: 'search_link' as const,
    value: '/search',
    iconSrc: '/assets/images/icons/search.svg',
  },
  {
    label: 'messages_link' as const,
    value: '/messages',
    iconSrc: '/assets/images/icons/message.svg',
  },
  {
    label: 'booking_link' as const,
    value: '/my-reservations',
    iconSrc: '/assets/images/icons/calendar.svg',
  },
  {
    label: 'menu_link' as const,
    value: '/menu',
    iconSrc: '/assets/images/icons/menu.svg',
  },
];

const TabBar = () => {
  const pathname = usePathname();

  const t = useTranslations('BaseTemplate');

  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-around border-t border-zinc-200 bg-white p-2">
      {TabBarItems.map((item, index) => (
        <TabBarItem
          key={index}
          {...item}
          isActive={pathname === item.value}
          label={t(item.label)}
        />
      ))}
    </div>
  );
};

export { TabBar };
