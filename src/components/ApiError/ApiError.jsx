import './ApiError.css';

function ApiError({
	message,
	show
}) {
	return (
		<p className={`api-error ${show && 'api-error_open'}`}>{message}</p>
	);
}

export default ApiError;