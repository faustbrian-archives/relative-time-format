export class RelativeTimeFormat {
	// @ts-ignore
	readonly #rtf: Intl.RelativeTimeFormat;

	public constructor(locales?: string | string[], options?: object) {
		// @ts-ignore
		this.#rtf = new Intl.RelativeTimeFormat(locales, options);
	}

	public seconds(value: number): string {
		return this.#rtf.format(value, "second");
	}

	public minutes(value: number): string {
		return this.#rtf.format(value, "minute");
	}

	public hours(value: number): string {
		return this.#rtf.format(value, "hour");
	}

	public days(value: number): string {
		return this.#rtf.format(value, "day");
	}

	public weeks(value: number): string {
		return this.#rtf.format(value, "week");
	}

	public months(value: number): string {
		return this.#rtf.format(value, "month");
	}

	public quarters(value: number): string {
		return this.#rtf.format(value, "quarter");
	}

	public years(value: number): string {
		return this.#rtf.format(value, "year");
	}
}
