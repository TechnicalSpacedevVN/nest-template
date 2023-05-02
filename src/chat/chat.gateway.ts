import { UseGuards } from '@nestjs/common'
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets'
import { Observable, from, map } from 'rxjs'
import { Server, Socket } from 'socket.io'
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
// @UseGuards(AuthGu)
export class ChatGateway {
  @WebSocketServer()
  server: Server

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    console.log('message')
    this.server.emit('demo', { data: true })
    return 'Hello world!'
  }

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    console.log('events')

    return from([1, 2, 3]).pipe(map((item) => ({ event: 'events', data: item })))
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    console.log('identity')

    return data
  }
}
