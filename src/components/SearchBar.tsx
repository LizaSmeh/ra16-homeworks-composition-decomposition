import ContentLink from "./ContentLink";

/**
 * Основной компонент. Строка поиска и ссылки на другие ресурсы
 */

const links = [
	{ reference: '#', name: 'Видео' },
	{ reference: '#', name: 'Картинки' },
	{ reference: '#', name: 'Новости' },
    { reference: '#', name: 'Карты' },
    { reference: '#', name: 'Маркет' },
];

const SearchBar = () => {

	return (
		<>
			<div className='main-content'>
				<img className='img' src='https://cs.hse.ru/pubs/share/direct/544502712.jpeg'></img>
				<div>
					<div>
						<ContentLink links={links} />
					</div>
					<div>
						<input></input>
						<button>Найти</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchBar;