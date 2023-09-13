import { revalidatePath } from "next/cache"

async function getTickets (id) {
    const res = await fetch ('http://localhost:5000/tickets/' + id, {
        next: {
            revalidate: 60
        }
    })

    return res.json()
}

export default async function TicketDetails ({ params }) {
    const ticket = await getTickets(params.id)
    
    return (
        <main>
            <nav>
            Ticket Details
            </nav>

            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                    <div className={ `pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>

            </div>
        </main>
        )
}