import NewsLink from "./NewsLink";

/**
 * Список новостей
 */

const newsData = [
    { icon: '📰', text: 'Путин упростил получение автомобильных номеров', link: '#' },
    { icon: '📰', text: 'В команде Зеленского раскрыли план реформ на Украине', link: '#' },
    { icon: '📰', text: 'Суд закрыл дело Демпартии США', link: '#' },
    { icon: '📰', text: 'На Украине призвали создать ракеты для удара по Москве', link: '#' },
  ];
  
  const NewsList = () => {
    return (
      <div>
        <div>
          {newsData.map((news, index) => (
            <NewsLink key={index} {...news} />
          ))}
        </div>
      </div>
    );
  };
  
  export default NewsList;