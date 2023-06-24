import { Publisher , OrderCreatedEvent , Subjects } from "@mt_tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}