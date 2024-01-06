import './top.css';
import ThemeSelect from '~/components/theme-select/theme-select';
import { Link } from '@remix-run/react';

export default function Top() {
	return (
		<section className={''}>
			<div className="grid">
				<div className={'top-logo-wrap'}>
					<Link to={'/'} className={'flex-center p-3 px'}>
						<div className={'sm-mx-auto top-logo'}/>
					</Link>
				</div>

				<div className='p-3 px flex-center-center flex-gap-1'>
					<menu className={'flex-center-center flex-gap-05 p-3 px'}>
						<Link className={'p-3 px menu-item'} to={'/about'}>
							About
						</Link>
					</menu>

					<div className={'theme-selector'}>
						<ThemeSelect/>
					</div>
				</div>
			</div>

		</section>
	);
}
