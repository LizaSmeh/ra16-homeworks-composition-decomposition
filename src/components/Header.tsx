import HeaderLink from "./HeaderLink";

const links = [
	{ reference: '#', text: 'Сейчас в сми' },
    { reference: '#', text: 'В Германии' },
    { reference: '#', text: 'Рекомендуем' },
];

const Header = () => {
    return (
        <header>
						<HeaderLink links={links} />
					</header>
    )
}

export default Header