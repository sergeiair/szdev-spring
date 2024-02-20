
import { readFileSync } from 'fs'

const getFileContents = (filename: string) => readFileSync(`./public/files/cv_zhardetski_szdev.pdf`)

type ParamsType = {
	filename: string
}

export async function loader({ params }: { params: ParamsType }) {
	const { filename } = params
	const pdf = getFileContents(filename)
	return new Response(pdf, {
		status: 200,
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'attachment; filename=cv_zhardetski_szdev.pdf'
		},
	})
}
