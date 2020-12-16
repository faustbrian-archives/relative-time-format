import "jest-extended";

import { RelativeTimeFormat } from "../src";

let subject: RelativeTimeFormat;

beforeEach(() => (subject = new RelativeTimeFormat("en")));

test("#seconds", async () => {
	expect(subject.seconds(1)).toBe("in 1 second");
	expect(subject.seconds(-1)).toBe("1 second ago");
});

test("#minutes", async () => {
	expect(subject.minutes(1)).toBe("in 1 minute");
	expect(subject.minutes(-1)).toBe("1 minute ago");
});

test("#hours", async () => {
	expect(subject.hours(1)).toBe("in 1 hour");
	expect(subject.hours(-1)).toBe("1 hour ago");
});

test("#days", async () => {
	expect(subject.days(1)).toBe("in 1 day");
	expect(subject.days(-1)).toBe("1 day ago");
});

test("#weeks", async () => {
	expect(subject.weeks(1)).toBe("in 1 week");
	expect(subject.weeks(-1)).toBe("1 week ago");
});

test("#months", async () => {
	expect(subject.months(1)).toBe("in 1 month");
	expect(subject.months(-1)).toBe("1 month ago");
});

test("#quarters", async () => {
	expect(subject.quarters(1)).toBe("in 1 quarter");
	expect(subject.quarters(-1)).toBe("1 quarter ago");
});

test("#years", async () => {
	expect(subject.years(1)).toBe("in 1 year");
	expect(subject.years(-1)).toBe("1 year ago");
});
