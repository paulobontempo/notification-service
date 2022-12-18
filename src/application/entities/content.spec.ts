import { Content } from './content';

describe('Notification Content', () => {
  test('It should be possible to create a new notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade!');

    expect(content).toBeTruthy();
  });

  test('It should not be possible to create a new notification content with less than 5 caracteres', () => {
    expect(() => new Content('Você')).toThrow();
  });

  test('It should not be possible to create a new notification content with more than 240 caracteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
