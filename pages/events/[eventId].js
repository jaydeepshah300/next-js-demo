import { useRouter } from "next/router";
import { getEventById } from "../../data/dummy-data";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <div>
      <h1>Event Detail Page</h1>
    </div>
  );
};

export default EventDetailPage;
