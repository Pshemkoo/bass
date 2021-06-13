import Head from 'next/head';

import About from '../components/home/about';
import Wallpaper from '../components/home/wallpaper';

function HomePage() {
	return (
		<>
			<Head>
				<title>BAS Gaming</title>
			</Head>
			<Wallpaper />
			<About />
		</>
	);
}

export default HomePage;
