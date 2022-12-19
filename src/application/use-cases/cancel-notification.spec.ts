import { Notification } from '../../application/entities/notification';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { SendNotification } from './send-notification';
import { Content } from '../../application/entities/content';
import { NotificationNotFound } from '../../application/use-cases/errors/notification-not-found';

describe('Cancel Notification', () => {
  test('It should be able to cancel a notification', async () => {
    const inMemoryNotificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(
      inMemoryNotificationRepository,
    );

    const notification = new Notification({
      category: 'Social',
      content: new Content('Nova solicitação de amizade'),
      recipientId: 'Example-recipient-id',
    })

    await inMemoryNotificationRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    })
    
    expect(inMemoryNotificationRepository.notifications[0].cancelAt).toEqual(
      expect.any(Date),
    );
  });

  test('It should NOT be able to cancel a notification', async () => {
    const inMemoryNotificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(
      inMemoryNotificationRepository,
    );

    await cancelNotification.execute({
      notificationId: 'not-existent-notification-id',
    })
    
    expect(() => {
      return cancelNotification.execute({
        notificationId: 'not-existent-notification-id',
      })
    }).rejects.toThrow(NotificationNotFound)
  });
});
