import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('It should be possible to create a new notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de Amizade!'),
      category: 'Social',
      recipientId: 'recipientId-example',
    });

    expect(notification).toBeTruthy();
  });
});
