import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
      <div className="p-4 bg-emerald-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
        <Icon className="text-emerald-600 w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-navy-800 mb-3 group-hover:text-emerald-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;