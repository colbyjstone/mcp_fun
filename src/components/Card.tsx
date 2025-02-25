import React from 'react';

interface CardProps {
  title: string;
  description: string;
  footer?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  footer,
  className = '',
}) => {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden ${className}`}>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      {footer && (
        <div className="border-t border-gray-200 bg-gray-50 p-4">
          {footer}
        </div>
      )}
    </div>
  );
};
