import EventItem from '../event-Item/event-item';
import classes from './event-list.module.css';

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event, index)=> (<EventItem key={index} {...event} />))}
    </ul>    
  );
}

export default EventList;