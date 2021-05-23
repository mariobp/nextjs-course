import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/events/event-detail/event-summary';
import EventLogistics from '../../components/events/event-detail/event-logistics';
import EventContent from '../../components/events/event-detail/event-content';

const EventDetail = () => {
  const router = useRouter();
  const eventId = router.query.id;
  const event = getEventById(eventId);

  if (!event) {
    return <p>Event not found!</p>
  }

  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetail;