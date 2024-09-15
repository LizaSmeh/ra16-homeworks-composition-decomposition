/**
 * Ссылки для списка новостей
 */

interface NewsLinkProps {
    icon?: string;
    text: string;
    link: string;
  }
  
  const NewsLink: React.FC<NewsLinkProps> = ({ icon, text, link }) => {
    return (
      <div>
        <span>{icon}</span>
        <a href={link}>{text}</a>
      </div>
    );
  };
  
  export default NewsLink;