import { CreateEventFormAudience } from "@/pages/create-event/create-event-form-audience.tsx";
import { CreateEventFormGetStarted } from "@/pages/create-event/create-event-form-get-started.tsx";
import { CreateEventFormTitleCover } from "@/pages/create-event/create-event-form-title-cover.tsx";
import { CreateEventRoot } from "@/pages/create-event/create-event-root.tsx";
import { Navigate, Route } from "react-router";

const CreateEventRouter = () => {
  return (
    <Route path="/create-event" element={<CreateEventRoot />}>
      <Route path="get-started" element={<CreateEventFormGetStarted />} />
      <Route path="title" element={<CreateEventFormTitleCover />} />
      <Route path="audience" element={<CreateEventFormAudience />} />
      <Route
        path="/create-event"
        element={<Navigate to={"/create-event/get-started"} replace />}
      />
    </Route>
  );
};
export { CreateEventRouter };
