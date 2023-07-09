import useRequest from '../../hooks/use-request';

const TicketShow = ({ ticket }) => {

    const { doRequest , errors } = useRequest({
        url: '/api/orders',
        method: 'post',
        body: {
            ticketId: ticket.id
        },
        onSuccess: (order) => console.log(order)
    });

    return (
        <div>
            <h1>{ticket.title}</h1>
            <h4>Price: {ticket.price}</h4>
            {errors}
            <button onClick={doRequest} className="btn btn-primary">Purchase</button>
        </div>
    )
};

TicketShow.getInitialProps = async (context, client) => {
    // we named it ticketId here as the file name is [ticketId]
    const { ticketId } = context.query;
    const { data } = await client.get(`/api/tickets/${ticketId}`);
    // this ticket prop will be merged with all of the props as params to TicketShow
    return { ticket: data };
};

export default TicketShow;