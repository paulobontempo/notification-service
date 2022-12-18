import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  test('It should be able to send a notification', async () => {
    const inMemoryNotificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(
      inMemoryNotificationRepository,
    );

    const { notification } = await sendNotification.execute({
      category: 'social',
      recipientId: 'recipientId-example',
      content: 'Seja bem vindo a comunidade',
    });
    expect(inMemoryNotificationRepository.notifications).toHaveLength(1);
    expect(inMemoryNotificationRepository.notifications[0]).toEqual(
      notification,
    );
  });
});
