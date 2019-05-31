const functions = require('./functions')

const { add, isNull, createUser, chunkArray} = functions

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(add(2, 2)).toBe(4)
})

// not 修饰符允许你测试结果不等于某个值的情况
test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
  expect(isNull()).toBeNull();
});

// toBeFalsy 判断值是否为false
test('Should be falsy', () => {
  expect(undefined).toBeFalsy()
})

// .toEqual匹配器会递归的检查对象所有属性和属性值是否相等，
// 所以如果要进行应用类型的比较时，
// 请使用.toEqual匹配器而不是.toBe
test('User should be Brad Traversy object', () => {
  expect(createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  });
});

// 数值对比
test('数值对比', () => {
  expect(8).toBeGreaterThan(7)
  expect(7).toBeGreaterThanOrEqual(7)
  expect(6).toBeLessThan(7)
  expect(6).toBeLessThanOrEqual(6)
});

// Regex 正则匹配
test('正则匹配', () => {
  expect('team').not.toMatch(/I/i)
});

// Arrays
test('Arrays对比', () => {
  expect(['john', 'karen', 'admin']).toContain('admin');
});

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1)
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})

// 确认chunkArray 已经被声明定义
test('chunkArray function exists', () => {
  expect(chunkArray).toBeDefined()
})

// 验证实例1
test('Chunk an array of 10 values with length of 2', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);
  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('Chunk an array of 10 values with length of 2', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7]
  const len = 3
  const chunkedArr = chunkArray(numbers, len)
  expect(chunkedArr).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
})
