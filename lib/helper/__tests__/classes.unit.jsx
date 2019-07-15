import classes from '../classes';

describe('classes', () => {
	it('receive a className', () => {
		const result = classes('a');
		expect(result).toEqual('a');
	});
	it('receive two classNames', () => {
		const result = classes('a', 'b');
		expect(result).toEqual('a b');
	});
	it('receive a undefined', () => {
		const result = classes('a', undefined);
		expect(result).toEqual('a');
	});
	it('receive Chinese', () => {
		const result = classes('a', null, '中文');
		expect(result).toEqual('a 中文');
	});
	it('no parameter`', () => {
		const result = classes();
		expect(result).toEqual('');
	});
});