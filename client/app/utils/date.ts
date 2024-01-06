import dayjs from 'dayjs';

export class DateUtils {

	static getFormattedDate(dateValues: number[]) {
		return dayjs(new Date(dateValues?.join('-'))).format('MMMM DD, YYYY')
	}
}
