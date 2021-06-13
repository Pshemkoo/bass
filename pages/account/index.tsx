import Head from 'next/head';

import { Flex } from '@/styles';
import Box from '../../components/account/box';

const Account = () => (
	<>
		<Head>
			<title>Konto</title>
		</Head>
		<Flex maxHeight>
			<Box />
		</Flex>
	</>
);

export default Account;
