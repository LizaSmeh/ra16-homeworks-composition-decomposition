import WidgetCard from './WidgetCard'
import NewsLink from './NewsLink';

/**
 * Список виджетов
 */

const widgetsData = [
  { title: 'Погода', items: [
    {icon: '☁️', text: 'Москва', link: '#'},
    ]
  },
  { title: 'Телепрограмма', items:[
    {icon: '▶️', text: 'ТНТ', link: '#'},
    ]
  },
];

const WidgetList = () => {
  return (
    <div>
      {widgetsData.map((card, index) => (
        <WidgetCard key={index} title={card.title}>
          {card.items.map((item, itemIndex) => (
            <NewsLink key={itemIndex} {...item} />
          ))}
        </WidgetCard>
      ))}
    </div>
  );
};

export default WidgetList;