import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

type ITabBarItemProps = {
  iconSrc: string;
  label: string;
  value: string;
};

const TabBarItem = ({ iconSrc, label, value }: ITabBarItemProps) => (
  <Link
    href={value}
    className="flex flex-col items-center capitalize text-zinc-600"
  >
    <Image src={iconSrc} alt="Home icon" width={24} height={24} />
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
  const t = useTranslations('BaseTemplate');

  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-around border-t border-zinc-200 bg-white p-2">
      {TabBarItems.map((item, index) => (
        <TabBarItem key={index} {...item} label={t(item.label)} />
      ))}
      {/* <button */}
      {/*  type="button" */}
      {/*  className="flex flex-col items-center text-zinc-600 dark:text-zinc-400" */}
      {/* > */}
      {/*  <Image */}
      {/*    src="/assets/images/icons/home.svg" */}
      {/*    alt="Home icon" */}
      {/*    width={24} */}
      {/*    height={24} */}
      {/*  /> */}
      {/*  홈 */}
      {/* </button> */}
      {/* <button */}
      {/*  type="button" */}
      {/*  className="flex flex-col items-center text-orange-500" */}
      {/* > */}
      {/*  <svg className="mb-1 size-6" fill="currentColor" viewBox="0 0 24 24"> */}
      {/*    <path d="M12 2a10 10 0 00-7.07 17.07A10 10 0 1012 2zm0 2a8 8 0 110 16A8 8 0 0112 4z" /> */}
      {/*  </svg> */}
      {/*  검색 */}
      {/* </button> */}
      {/* <button */}
      {/*  type="button" */}
      {/*  className="flex flex-col items-center text-zinc-600 dark:text-zinc-400" */}
      {/* > */}
      {/*  <svg className="mb-1 size-6" fill="currentColor" viewBox="0 0 24 24"> */}
      {/*    <path d="M12 2a10 10 0 00-7.07 17.07A10 10 0 1012 2zm0 2a8 8 0 110 16A8 8 0 0112 4z" /> */}
      {/*  </svg> */}
      {/*  피드 */}
      {/* </button> */}
      {/* <button */}
      {/*  type="button" */}
      {/*  className="flex flex-col items-center text-zinc-600 dark:text-zinc-400" */}
      {/* > */}
      {/*  <svg className="mb-1 size-6" fill="currentColor" viewBox="0 0 24 24"> */}
      {/*    <path d="M12 2a10 10 0 00-7.07 17.07A10 10 0 1012 2zm0 2a8 8 0 110 16A8 8 0 0112 4z" /> */}
      {/*  </svg> */}
      {/*  내 예약 */}
      {/* </button> */}
      {/* <button */}
      {/*  type="button" */}
      {/*  className="flex flex-col items-center text-zinc-600 dark:text-zinc-400" */}
      {/* > */}
      {/*  <svg className="mb-1 size-6" fill="currentColor" viewBox="0 0 24 24"> */}
      {/*    <path d="M12 2a10 10 0 00-7.07 17.07A10 10 0 1012 2zm0 2a8 8 0 110 16A8 8 0 0112 4z" /> */}
      {/*  </svg> */}
      {/*  메뉴 */}
      {/* </button> */}
    </div>
  );
};

export { TabBar };
