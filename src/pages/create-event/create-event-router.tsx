import { CreateEventWrapper } from "@/components/create-event/create-event-wrapper.tsx";
import { CreateEventFormAgenda } from "@/pages/create-event/create-event-form-agenda.tsx";
import { CreateEventFormAudience } from "@/pages/create-event/create-event-form-audience.tsx";
import { CreateEventFormContentBody } from "@/pages/create-event/create-event-form-content-body.tsx";
import { CreateEventFormFaq } from "@/pages/create-event/create-event-form-faq.tsx";
import { CreateEventFormGetStarted } from "@/pages/create-event/create-event-form-get-started.tsx";
import { CreateEventFormPeople } from "@/pages/create-event/create-event-form-people.tsx";
import { CreateEventFormTicket } from "@/pages/create-event/create-event-form-ticket.tsx";
import { CreateEventFormTimeLocation } from "@/pages/create-event/create-event-form-time-location.tsx";
import { CreateEventFormTitleCover } from "@/pages/create-event/create-event-form-title-cover.tsx";
import { CreateEventRoot } from "@/pages/create-event/create-event-root.tsx";
import { Navigate, Route } from "react-router";

const CreateEventRouter = () => {
  return (
    <Route path="/create-event" element={<CreateEventRoot />}>
      <Route path="get-started" element={<CreateEventFormGetStarted />} />
      <Route
        path="title"
        element={
          <CreateEventWrapper
            title={"Title & Cover"}
            subtitle={
              "Create an attractive title and cover photo for your event to capture the attention of your target audience."
            }
          >
            <CreateEventFormTitleCover />
          </CreateEventWrapper>
        }
      />
      <Route
        path="audience"
        element={
          <CreateEventWrapper
            title={"Audience"}
            subtitle={
              "Select the appropriate industry and relevant tags for your event. This will make your event easily searchable by the right audience."
            }
          >
            <CreateEventFormAudience />
          </CreateEventWrapper>
        }
      />
      <Route
        path="time"
        element={
          <CreateEventWrapper
            title={"Time & Location"}
            subtitle={"Set the event time and location of your event."}
          >
            <CreateEventFormTimeLocation />
          </CreateEventWrapper>
        }
      />
      <Route
        path="tickets"
        element={
          <CreateEventWrapper
            title={"Tickets"}
            subtitle={
              "Configure your ticket pricing (pro), ticket limits, and RSVPs."
            }
          >
            <CreateEventFormTicket />
          </CreateEventWrapper>
        }
      />
      <Route
        path={"people"}
        element={
          <CreateEventWrapper
            title={"Hosts"}
            subtitle={
              "Hosts can help manage your event. Add hosts from your connections or manually enter them in."
            }
          >
            <CreateEventFormPeople />
          </CreateEventWrapper>
        }
      />
      <Route
        path={"content-body"}
        element={
          <CreateEventWrapper
            title={"Content Body"}
            subtitle={"Compose the main content body of your event."}
          >
            <CreateEventFormContentBody />
          </CreateEventWrapper>
        }
      />
      <Route
        path={"agenda"}
        element={
          <CreateEventWrapper
            title={"Agenda"}
            subtitle={
              "Create an organised agenda for your event. List the event activities and then they will take place. Add as many agenda items as your need."
            }
          >
            <CreateEventFormAgenda />
          </CreateEventWrapper>
        }
      />
      <Route
        path={"faq"}
        element={
          <CreateEventWrapper
            title={"FAQ"}
            subtitle={
              "Organised your frequently asked questions. You can add as many as you need."
            }
          >
            <CreateEventFormFaq />
          </CreateEventWrapper>
        }
      />
      <Route
        path="/create-event"
        element={<Navigate to={"/create-event/get-started"} replace />}
      />
    </Route>
  );
};
export { CreateEventRouter };
