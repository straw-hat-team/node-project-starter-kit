import { message } from '@/main';

test('returning hello world', () => {
  expect(message()).toBe('Hello, World!');
});
