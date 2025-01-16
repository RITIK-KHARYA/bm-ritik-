import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "./sign-in";
import { SignUp } from "./sign-up";

export default function authTabs() {
  return (
    <Tabs defaultValue="sign-in">
      <TabsList className="h-auto -space-x-px bg-background p-0 shadow-sm shadow-black/5 rtl:space-x-reverse">
        <TabsTrigger
          value="tab-1"
          className="relative overflow-hidden rounded-none border border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary"
        >
          SignIn
        </TabsTrigger>
        <TabsTrigger
          value="sign-up"
          className="relative overflow-hidden rounded-none border border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary"
        >
          Sign Up
        </TabsTrigger>
      </TabsList>
      <TabsContent value="sign-in">
        <SignIn />
      </TabsContent>
      <TabsContent value="sign-up">
        <SignUp />
      </TabsContent>
    </Tabs>
  );
}
