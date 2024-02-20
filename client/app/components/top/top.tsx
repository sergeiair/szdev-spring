import './top.css';
import ThemeSelect from '~/components/theme-select/theme-select';
import { Link, NavLink } from '@remix-run/react';
import { ClientOnly } from 'remix-utils/client-only';

export default function Top() {
	return (
		<div className={'top'}>
			<div className="grid">
				{<div className={'top-logo-wrap'}>
					<Link to={'/'} className={'flex-center p-3 px'}>
						<span className={'top-logo'}/>
					</Link>
				</div>}

				<div className='p-3 px flex-center-center flex-gap-1'>
					<menu className={'flex-center-center flex-gap-05 p-3 px'}>
						<NavLink
							className={({isActive}) =>
								`p-3 px menu-item ${isActive ? "menu-item--active" : ""}`
							}
							to={'/about'}>
							About
						</NavLink>

						<NavLink className={({isActive}) =>
							`p-3 px menu-item ${isActive ? "menu-item--active" : ""}`
						} to={'/contact'}>
							Contact
						</NavLink>
					</menu>

					<div className={'theme-selector'}>
						<ClientOnly fallback={null}>
							{() => <ThemeSelect/>}
						</ClientOnly>
					</div>
				</div>
			</div>

		</div>
	);
}
