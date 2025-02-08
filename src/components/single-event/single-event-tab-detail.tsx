import { getRelatedCards } from "@/api/events-api.ts";
import { EventCard } from "@/components/events/event-card.tsx";
import { SingleEventFaq } from "@/components/single-event/single-event-faq.tsx";
import { SingleEventPartners } from "@/components/single-event/single-event-partners.tsx";
import { SingleEventPresenters } from "@/components/single-event/single-event-presenters.tsx";
import { DetailedEvent } from "@/models/single-event.ts";
import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { SingleEventAgendaAccordion } from "./single-event-agenda-accordion";

const Section = ({
  title,
  children,
  id,
}: PropsWithChildren<{ id: string; title: string }>) => {
  return (
    <div id={id} className={"flex flex-col gap-2"}>
      <span className={"text-2xl font-semibold leading-[38px]"}>{title}</span>
      {children}
    </div>
  );
};

const googleAPI = import.meta.env.VITE_GOOGLE_API;

type Props = {
  event: DetailedEvent;
};
const SingleEventTabDetail = ({ event }: Props) => {
  const { about, agenda, faqs, partners, presenters, location } = event;
  const { data: relatedCards = [], status } = useQuery({
    queryFn: getRelatedCards,
    queryKey: ["related-card"],
  });

  const { address, longitude, latitude } = location;
  const coordinate = `${latitude}, ${longitude}`;
  return (
    <div className={"flex flex-col gap-5"}>
      <Section id="about" title={"About this event"}>
        <p>{about}</p>
      </Section>
      <Section id="location" title={"Location"}>
        <span
          className={"text-base font-medium leading-6"}
        >{`${address.street}, ${address.suburb} ${address.state}.`}</span>
        <iframe
          width="824"
          height="429"
          style={{
            border: 0,
            borderRadius: "16px",
          }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${googleAPI}&q=${coordinate}`}
          allowFullScreen
        />
      </Section>
      <Section id="agenda" title={"Agenda"}>
        <SingleEventAgendaAccordion agenda={agenda} />
      </Section>
      <Section id="presenters" title={"Presenters"}>
        <SingleEventPresenters presenters={presenters} />
      </Section>
      <Section id="partners" title={"Partners & Sponsors"}>
        <SingleEventPartners partners={partners} />
      </Section>
      <Section id="faq" title={"Frequently Asked Questions"}>
        <SingleEventFaq questions={faqs} />
      </Section>
      {status === "success" && relatedCards.length > 0 && (
        <Section id="related" title={"Related Events"}>
          <div className={"grid grid-cols-[repeat(auto-fit,_287px)] gap-2"}>
            {relatedCards.map((card) => (
              <EventCard key={card.id} card={card} />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
};
export { SingleEventTabDetail };
