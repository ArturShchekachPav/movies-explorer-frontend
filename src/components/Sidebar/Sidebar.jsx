import Navigation from '../Navigation/Navigation';
import './Sidebar.css';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

function Sidebar({
	isOpen,
	onClose
}) {
	const location = useLocation();
	
	useEffect(() => {
			if (!isOpen) return;
			
			function handleEscape(e) {
				if (e.key === 'Escape') {
					onClose(false);
				}
			}
			
			document.addEventListener('keydown',
				handleEscape
			);
			
			return () => {
				document.removeEventListener('keydown',
					handleEscape
				);
			};
			
		},
		[isOpen]
	);
	
	useEffect(() => {
			if (isOpen) {
				onClose(false);
			}
		},
		[location]
	);
	
	return (
		<section
			className={`sidebar ${isOpen ?
				'sidebar_open' :
				''}`}
		>
			<div
				onClick={() => onClose(false)}
				className={`sidebar__overlay ${isOpen ?
					'sidebar__overlay_open' :
					''}`}
			></div>
			<div
				className={`sidebar__container ${isOpen ?
					'sidebar__container_open' :
					''}`}
			>
				<Navigation modificator="sidebar"/>
				<button
					type="button"
					aria-label="Закрыть меню"
					className="sidebar__close-button hover hover_type_button"
					onClick={() => onClose(false)}
				></button>
			</div>
		</section>
	);
}

export default Sidebar;