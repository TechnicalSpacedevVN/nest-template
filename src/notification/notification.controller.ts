import { Controller } from '@nestjs/common'
import { NotificationService } from './notification.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('notification')
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}
}
