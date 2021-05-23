import Link from 'next/link';
import Button from '../../ui/Button/button';
import DateIcon from '../../ui/Icons/date-icon';
import classes from './event-item.module.css';
import AddressIcon from '../../ui/Icons/address-icon';
import ArrowRightIcon from '../../ui/Icons/arrow-right-icon';

const EventItem = props => {
  const { title, date, location, id, image } = props;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formattedLocation = location ? location.replace(', ', '\n') : ''; 

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title}/>
      <div className={classes.content}>
         <div>
           <h2>
             {title}
           </h2>
           <div className={classes.date}>
             <DateIcon />
             <time>{formattedDate}</time>
           </div>
           <div className={classes.address}>
             <AddressIcon />
             <address>{formattedLocation}</address>
           </div>
         </div>
         <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
         </div>
      </div>
    </li>
  );
}

export default EventItem;