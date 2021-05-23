import { useRouter } from "next/router";
import { Fragment } from "react";
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list/event-list';
import ResultsTitle from '../../components/results-title/results-title';
import Button from "../../components/ui/Button/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  
  if (!filteredData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth > 12 ||
    filteredMonth < 1
  ) {
    return (
      <ErrorAlert>
        <p className='center'>Invalid filter. Please adjust your values!</p>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({ year: filteredYear, month: filteredMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
        <ErrorAlert>
          <p className='center'>No events found for the chosen filter!</p>
          <Button link='/events'>Show All Events</Button>
        </ErrorAlert>
      );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents}/>
    </Fragment>
  );
}

export default FilteredEventsPage;