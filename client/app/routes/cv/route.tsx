import type { MetaFunction } from "@remix-run/node";
import './cv.css';
import { LoaderFunction } from '@remix-run/router';
import { useLoaderData } from '@remix-run/react';
import getTotalYears from '~/routes/cv/years';
import MaybeText from '~/components/text/maybe-text';
import ThemeSelect from '~/components/theme-select/theme-select';
import { ClientOnly } from "remix-utils/client-only";

type WorkExperience = {
	company: string;
	period: string;
	duration: string;
	tech: string;
	roles: string;
	responsibilities: string;
	achievements: string;
};

export const meta: MetaFunction = () => {
	return [
		{title: "My CV. Recruitment purposes only"},
		{name: "description", content: "",},
		{name: "robots", content: "noindex",},
	];
};

export const loader: LoaderFunction = async ({params}) => {
	return {
		periods: [
			{
				company: '-',
				period: ['February 2010', 'present'],
				duration: `${getTotalYears()} years`,
				tech: '',
				roles: 'Software engineer',
				responsibilities: '',
				achievements: 'A variety of other projects, including participation as a mentor and reviewer, along with personal initiatives and other activities not listed above. With varying degrees of involvement, I have worked on the back-end using Java with Spring, PHP, and .NET. Additionally, I have experience with databases such as MongoDB, Realm, MySQL, SQL Server, and Postgres. On the mobile front, I\'ve worked with Android, both XML and Compose UI, as well as Flutter and React Native. I\'m familiar with iOS on a bug fixing and making minor adjustments level. '
			},
			{
				company: 'AET entertainment technology, Freelance',
				period: ['February 2010', 'June 2014'],
				duration: '4+ years',
				tech: 'PHP, MySql, JavaScript, Zend framework, Smarty, etc',
				roles: 'Mainly full stack roles',
				responsibilities: 'Beginning of my career. Used to pick any job I could find. Improving and fixing LAMP stack apps, building e-commerce websites and plugins',
				achievements: 'Got expertise working with databases, MVC pattern, frameworks like Zend, managing servers via ssh terminal, wrote my first tests '
			},
			{
				company: 'Altoros',
				period: ['May 2014', 'June 2016'],
				duration: '2 years',
				tech: 'Angular, React, Cordova, Typescript and bunch of tools',
				roles: 'My first front-end role',
				responsibilities: 'Creating and maintaining apps done with AngularJs, Angular, React, Cordova',
				achievements: 'Engaged with Angular and React frameworks, developed a Cordova application from scratch, and was responsible for its release. '
			},
			{
				company: 'Freelance',
				period: ['2015'],
				duration: '< 1year',
				tech: '.NET 3.5, SQL Server, Razor, LINQ',
				roles: 'Back end',
				responsibilities: 'Building a server side for e-commerce project',
				achievements: 'First non-education MS stack project after completing a C# offline course '
			},
			{
				company: 'EPAM Systems',
				period: ['November 2015', 'December 2015'],
				duration: '2 months',
				tech: 'Custom JS library, Java, ATG, node.js',
				roles: 'Mainly front end',
				responsibilities: 'Architect-like role, help team to improve a project',
				achievements: 'First commercial experience with Java, nodejs, ci'
			},
			{
				company: 'Ryanair Labs Poland',
				period: ['June 2016', 'May 2018'],
				duration: '2 years',
				tech: 'Angular, NgRx, RxJs, React, AWS, Java',
				roles: 'Front-end',
				responsibilities: 'Creating and maintaining an Angular app, while ensuring it meets the metrics of automated tests. Representing front-end team on meetings, Helping less skilled teammates ',
				achievements: 'Dive into reactive and functional programming'
			},
			{
				company: 'Pet',
				period: ['2017'],
				duration: '1+ year',
				tech: 'React Native, Realm DB, redux, node.js',
				roles: 'Mobile',
				responsibilities: 'Creating React Native app from scratch and the ui design, Making a server support with node.js',
				achievements: 'App name: Wielka Ryba, 1000+ downloads, still used'
			},
			{
				company: 'Credit Suisse',
				period: ['May 2018', 'June 2019'],
				duration: '1+ year',
				tech: 'React, Angular, Java, Rx, D3.js',
				roles: 'Front-end',
				responsibilities: 'Engaged in financial data visualisation',
				achievements: 'Gained experience using D3.js the library in complex cases'
			},
			{
				company: 'Intive',
				period: ['December 2020', 'November 2021'],
				duration: '1 year',
				tech: 'React, Redux, Saga, Angular, Android, Java, Kotlin',
				roles: 'Front-end, later switched to Android',
				responsibilities: 'Yet another front-end role before switching to Android',
				achievements: 'Worked in big AI automation project as front-end engineer. Got first role as Android developer'
			},
			{
				company: 'Pet',
				period: ['2023'],
				duration: '1+ year',
				tech: 'Java, Spring, Remix, Express, AWS',
				roles: '',
				responsibilities: 'My personal website, szdev.cc',
				achievements: ''
			},
			{
				company: 'Snowball AS',
				period: ['May 2019', 'present'],
				duration: '4+ years',
				tech: 'Angular, Android, Flutter, Kotlin, Compose, Dagger, Koin',
				roles: 'Front-end and Mobile developer',
				responsibilities: 'Responsible for web and mobile apps',
				achievements: 'I have applied various design patterns and programming approaches in managing extensive codebases using Kotlin, Java, Dart, and TypeScript.'
			},

		].reverse()
	};
};

export default function Skills() {
	const data: { periods: WorkExperience[] } = useLoaderData();

	return (
		<div>

			<div className={'theme-selector'}>
				<ClientOnly fallback={null}>
					{() => <ThemeSelect/>}
				</ClientOnly>
			</div>

			<div className={'container p-3 py'}>


				<div className={'p-2 '}>
					<h1 className={'mb-1'}>Sergei Zhardetski (Sergiej Żardecki)</h1>
					<h3>Software engineer</h3>
				</div>

				<div className={'p-3 cv-divider-bottom'}>
					<h3 className={'cv-contact'}>+48 537 511 641</h3>
					<h3 className={'cv-contact'}>zsggem@gmail.com</h3>
				</div>

				<div className={'p-3'}></div>

				<div className={' cv-item'}>
					<div className={'cv-block p-3'}>
						<h4 className={'mb-0'}>Skillset</h4>
					</div>
					<div>
						<div>
							<strong>Back-end</strong>: Java + Spring, Node.js (Express or KOA). It's been a while since I last worked with the Microsoft stack.
							time
						</div>
						<div>
							<strong>Mobile</strong>: Android, Flutter, React native (all 3 commercial experience). iOS is on slowly
							studying level
						</div>
						<div>
							<strong>Front-end</strong>: React (als Remix, NextJs), Angular, Rx
						</div>
						<div>
							<strong>Other</strong>: AWS: EC2, DynamoDB, Cognito, Route 53, etc. Feel ok configuring linux machine with
							SSH
						</div>
					</div>
				</div>

				<div className={'p-3 cv-divider'}>
				</div>

				{
					data.periods.map((item, index) => (
						<div key={`${index}-${item.company}`} className={'flex flex-column cv-item'}>
							<div className={'cv-block p-3'}>
								{
									item.period?.map((period: string, index: number) => {
										return <div key={`${period}-${index}`}>
											<div>
												{period}
											</div>
											{!index && item.period.length > 1 && <div className={'p-1 py'}>to</div>}
										</div>
									})
								}
							</div>

							<MaybeText text={item.company} title={'Company'}/>
							<MaybeText text={item.tech} title={'Stack'}/>
							<MaybeText text={item.roles} title={'Role(s)'}/>
							<MaybeText text={item.responsibilities} title={'Responsibilities'}/>
							<MaybeText text={item.achievements} title={'Achievements'}/>
						</div>
					))
				}


				<div className={'p-2 py cv-divider'}>
					<div className={'p-3'}></div>

					<div className={' cv-item'}>
						<div className={'cv-block p-3'}>
							<h4 className={'mb-0'}>Education</h4>
						</div>
						<div>
							Graduation Year: 2012
							<div>Name of the Education Establishment: BSU Institute of Continuing Education.</div>
							<div>Faculty/College: Department of Applied Mathematics and Computer Science</div>
							<div>Specialty: Software Engineer</div>
						</div>
					</div>

				</div>

				<div className={''}>
					<div className={' cv-item'}>
						<div className={'cv-block p-3'}>
							<h4 className={'mb-0'}>Languages</h4>
						</div>
						<div>
							<div><strong>English</strong> B2</div>
							<div><strong>Polish</strong> B1+</div>
							<div><strong>Russian</strong> Native</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

