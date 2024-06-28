import React from 'react';

import { TabBar } from '@/components/TabBar';

const BaseTemplate = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen w-full bg-white p-4 text-gray-700 antialiased">
    <div className="pb-12">{children}</div>
    <TabBar />
  </div>
);

export { BaseTemplate };
