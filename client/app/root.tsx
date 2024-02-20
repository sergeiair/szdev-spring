import { cssBundleHref } from "@remix-run/css-bundle";

import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, } from "@remix-run/react";

import picoStyles from "@picocss/pico/css/pico.min.css";
import appStyles from "app/styles/index.css";
import highlightCss from 'highlight.js/styles/default.css';


export const links: LinksFunction = () => [
	...(cssBundleHref
		? [{rel: "stylesheet", href: cssBundleHref}]
		: []),
	{rel: "stylesheet", href: picoStyles},
	{rel: "stylesheet", href: appStyles},
	{rel: 'stylesheet', href: highlightCss},
];

export default function App() {

	return (
		<html lang="en">
		<head>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>

			<Meta/>
			<Links/>
		</head>
		<body>
		{process.env.NODE_ENV === "development" ? null : (
			<>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=G-JEVZWTHZN9`}
				/>
				<script
					async
					id="gtag-init"
					dangerouslySetInnerHTML={{
						__html: `
                window.dataLayer = window.dataLayer || [];
				function gtag(){window.dataLayer?.push(arguments)}
				gtag('js', new Date());

				gtag('config', 'G-JEVZWTHZN9');
              `,
					}}
				/>
			</>
		)}


		<Outlet/>
		<ScrollRestoration/>
		<Scripts/>
		<LiveReload/>
		</body>
		</html>
	);
}
