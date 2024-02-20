import type { MetaFunction } from "@remix-run/node";
import PublicPageSkeleton from '~/components/skeletons/public/public-page-skeleton';
import React from 'react';
import './contact.css';


export const meta: MetaFunction = () => {
	return [
		{title: "Contact me"},
		{name: "description", content: "Contact author of szdev.cc"},
		{name: "robots", content: "noindex",},
	];
};

export default function Contact() {

	return (
		<PublicPageSkeleton>
			<>
				<div className={'p-4 py'}>
					<h1>Contact</h1>
				</div>

				<div className={'flex-center flex-gap-1 p-2 py'}>
					<svg
						className={'contacts-svg'}
						width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
							strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>

					<a
						className={'contacts-link'}
						href={'mailto:szdevcc@gmail.com'}>
						szdevcc@gmail.com
					</a>
				</div>

				<div className={'flex-center flex-gap-1 p-2 py'}>
					<svg className={'contacts-link-in'}
							 width="30px" height="30px" viewBox="0 0 32 32" version="1.1"
							 xmlns="http://www.w3.org/2000/svg">
						<title>linkedin</title>
						<path
							d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
					</svg>

					<a target={'_blank'}
						className={'contacts-link'}
						href={'https://www.linkedin.com/in/sergiej-zhardzetski/'}>
						LinkedIn
					</a>
				</div>

				<div className={'flex-center flex-gap-1 p-2 py'}>
					<svg className={'contacts-link-fb'}
							 width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"/>
					</svg>

					<a target={'_blank'}
						className={'contacts-link'}
						href={'https://www.facebook.com/sergeiair'}>
						Facebook
					</a>
				</div>
			</>
		</PublicPageSkeleton>
	);
}
