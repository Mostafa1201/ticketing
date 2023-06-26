import { Listener, OrderCancelledEvent, OrderCreatedEvent, OrderStatus, Subjects} from '@mt_tickets/common';
import { queueGroupName } from './queue-group-name';
import { Message } from 'node-nats-streaming';
import { Ticket } from '../../models/ticket';

export class OrderCreatedListener extends Listener<OrderCreatedEvent>{
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
    queueGroupName = queueGroupName;

    async onMessage(data: OrderCancelledEvent['data'], msg: Message){
        // Find the ticket that the order is reserving
        const ticket = await Ticket.findById(data.ticket.id);

        if(!ticket){
            throw new Error('Ticket not found');
        }
        // Mark the ticket as being reserved by setting its orderId property
        ticket.set({ orderId: data.id })
        // save the ticket
        await ticket.save();
        // ack the message
        msg.ack();
    }
}