import { productType } from '@/constants';
import { Repeat } from 'lucide-react';
import React from 'react';

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}
const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center gap-1.5 text-sm semibold">
      <div className="flex items-center gap-1.5">
        {productType?.map((item) => (
          <button
            key={item?.title}
            onClick={() => onTabSelect(item?.title)}
            className={`border border-deepPurple px-4 py-1 md:px-2 rounded-full
              hover:bg-trapperGreen hover:text-white hoverEffect ${selectedTab === item?.title && 'bg-trapperGreen text-white border-trapperGreen'}`}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <button className="border border-deepPurple p-1.5 rounded-full hover:bg-trapperGreen hover:text-white hoverEffect">
        <Repeat size={16} />
      </button>
    </div>
  );
};

export default HomeTabbar;
