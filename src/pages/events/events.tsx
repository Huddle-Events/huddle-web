import { getAllCards } from "@/api/events-api.ts";
import { EventCard } from "@/components/events/event-card.tsx";
import { EventDropdownLocation } from "@/components/events/event-dropdown-location.tsx";
import { EventDropdownType } from "@/components/events/event-dropdown-type.tsx";
import { EventDropdownOrderBy } from "@/components/events/event-dropdown-order-by.tsx";
import { EventDropdownDate } from "@/components/events/event-dropdown-date.tsx";
import { useQuery } from "@tanstack/react-query";

const Events = () => {
  const { data: allEvents = [] } = useQuery({
    queryFn: getAllCards,
    queryKey: ["all-cards"],
  });
  return (
    <div className={"flex flex-col gap-2 w-screen"}>
      <div className={"flex flex-row gap-2"}>
        <EventDropdownLocation />
        <EventDropdownDate />
        <EventDropdownType />
        <EventDropdownOrderBy />
      </div>
      <div className={"grid grid-cols-[repeat(auto-fit,_287px)] gap-2"}>
        {allEvents.map((event) => (
          <EventCard card={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};
export { Events };
