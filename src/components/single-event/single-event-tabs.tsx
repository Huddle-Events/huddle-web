import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SingleEventTabDetail } from "@/components/single-event/single-event-tab-detail.tsx";

const SingleEventTabs = () => {
  return (
    <Tabs defaultValue="details" className="">
      <TabsList>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="discussion">Discussion</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <SingleEventTabDetail />
      </TabsContent>
      <TabsContent value="discussion">Discussion goes here.</TabsContent>
    </Tabs>
  );
};

export { SingleEventTabs };
