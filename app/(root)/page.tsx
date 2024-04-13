import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex gap-2 items-center">
      <p>
        SAAS STARTER
      </p>
      <Button> Test! </Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
