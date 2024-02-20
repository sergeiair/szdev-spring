import './footer.css';
import { Link } from '@remix-run/react';

export default function Footer() {
	return (
		<footer className={'flex-center-center flex-gap-1'}>
			<small>szdev.cc 2023</small>

			<Link to={'/toc'}>
				<small>
					Terms of use
				</small>
			</Link>

			<Link to={'/contact'}>
				<small>
					Contact
				</small>
			</Link>

			<Link to={'/me'}>
				<small>
					Me
				</small>
			</Link>
		</footer>
	);
}
