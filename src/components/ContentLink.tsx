/**
 * Список ссылок на ресурсы
 */

interface ContentLinkProps {
    reference: string;
    name: string;
  }
  
  const ContentLink: React.FC<{ links: ContentLinkProps[] }> = ({ links }) => {
  
    return (
      <div>
        {links.map((link) => (
          <a href={link.reference}>{link.name}</a>
        ))}
      </div>
    );
  };
  
  export default ContentLink;