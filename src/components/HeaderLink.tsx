/**
 * Ссылки для шапки страницы
 */

interface HeaderProps {
    reference: string,
    text: string
}

const HeaderLink: React.FC<{links:HeaderProps []}> = ({links}) => {
    return(
        
            <div>
        {links.map((link) => (
          <a href={link.reference}>{link.text}</a>
        ))}
      </div>
       
    )
}

export default HeaderLink