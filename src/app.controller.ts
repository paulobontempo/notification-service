import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: any) {
    const { recipientId, content, category } = body;
    return this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
