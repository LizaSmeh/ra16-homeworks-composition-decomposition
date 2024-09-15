//import { ReactNode } from 'react';

/**
 * Виджет
 */

interface WidgetCardProps {
  title: string;
}

const WidgetCard: React.FC<WidgetCardProps> = ({ title, children }) => {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
    );
};

export default WidgetCard;