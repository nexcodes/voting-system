import { buttonVariants } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import MeetingTable from "../../_components/table";
import { getMeetings } from "@/actions/get-meetings";

export default async function Meetings() {
  const meetings = await getMeetings();

  return (
    <>
      <div className="flex items-center justify-end">
        <Link href="/add-meeting" className={buttonVariants()}>
          Add Meeting
          <PlusCircle size={20} className="ml-2" />
        </Link>
      </div>
      <MeetingTable meetings={meetings} />
    </>
  );
}
