import React, { FC, useState } from 'react';
import Header from './components/Header';

// @ts-ignore
// import Spinner from 'ink-spinner';

import SelectInput from 'ink-select-input';
import Receiver from './components/Receiver/index';

const App: FC<{ name?: string }> = ({ }) => {
	const [userType, setUserType] = useState(null);

	const handleSelect = (item: any) => {
		setUserType(item.value)
	};

	const items = [
		{
			label: 'Send',
			value: 'Sender'
		},
		{
			label: 'Receive',
			value: 'Receiver'
		},
	];

	return (
		<>
			<Header title='Peerly' />

			{/* {isConnected ? (
				<Text color="green">Connected.</Text>
			) : (
				<Text>
				{/* <Spinner type="dots" /> */}
					{/* Waiting for connection */}
				{/* </Text> */}
			{/* // )} */}
			{!userType && (
				<SelectInput items={items} onSelect={handleSelect} />
			)}
			
			{userType === 'Receiver' && (
				<Receiver />
			)}
		</>
	)

};

module.exports = App;
export default App;
