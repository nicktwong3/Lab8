const main = require('../assets/scripts/main.js');

describe('formatVolumeIconPath',() => {
	test('volume at 66', () => {
		expect(main(66)).toContain('2');
	});
	test('volume at 33',() => {
		expect(main(33)).toContain('1');
	});
	test('volume at 0',() => {
		expect(main(0)).toContain('0');
	});
	test('volume at 100',() => {
		expect(main(100)).toContain('3');
	});
	test('volume at 67', () => {
		expect(main(67)).toBe(`./assets/media/icons/volume-level-3.svg`);
	});
	test('volume at 34', () => {
		expect(main(34)).toBe(`./assets/media/icons/volume-level-2.svg`);
	});
	test('volume at 1', () => {
		expect(main(1)).toBe(`./assets/media/icons/volume-level-1.svg`);
	});
	test('volume below 0', () => {
		expect(main(-5)).toBe(`./assets/media/icons/volume-level-0.svg`);
	});
});
