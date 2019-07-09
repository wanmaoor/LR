function add(a: number, b: number) :number{
	return a+b
}

// test('第一个测试用例', () => {
// 	expect(3).toEqual(3)
// })

describe('加法测试', ()=>{
	it('1+2=3', ()=>{
		expect(add(1,2)).toEqual(3)
	})
})