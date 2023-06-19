import { Publisher , Subjects , TicketCreatedEvent } from '@mt_tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}