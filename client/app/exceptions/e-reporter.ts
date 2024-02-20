import Rollbar from 'rollbar';

export class EReporter {
	static #rollbar = new Rollbar({
		accessToken: 'd3258d72636941439d46b8df17908afd',
		captureUncaught: true,
		captureUnhandledRejections: true,
	})

	public static error(text: string, reporter: string = 'common'): void {
		this.#rollbar.error(`${reporter}: ${text}`)
	}

	public static maybeReportErrorFor5xx(code: number, text: string, reporter: string = 'common'): void {
		if (code >= 500) {
			this.#rollbar.error(`${reporter}: ${text}`)
		}
	}
}
