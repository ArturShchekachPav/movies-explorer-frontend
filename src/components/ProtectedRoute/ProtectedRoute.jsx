import {Navigate} from 'react-router-dom';

function ProtectedRoute({
	element,
	isLoggedIn
}) {
	return (
		isLoggedIn ?
			element :
			<Navigate
				to="/"
				replace={true}
			/>
	);
}

export default ProtectedRoute;