import EventList from "../../components/events/event-list/event-list";
import { getAllEvents } from "../../dummy-data";
import { Fragment } from 'react';
import EventSearch from "../../components/events/event-search/event-search";
import { useRouter } from "next/router";

const Event = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events}/>
    </Fragment>
  );
}

export default Event;