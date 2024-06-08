import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export function SideBar() {
  return (
    <section className="w-[18vw] h-[100vh] bg-gray-700   ">
      <div className="flex gap-[1vw] justify-center py-[10px] bg-gray-800">
        <img src="/meeting.png" alt="" className="w-[40px] opacity-65 " />
        <h1 className="text-white flex items-center">Employer Zone</h1>
      </div>
      <div className="flex justify-center gap-[20px] mt-[10px]">
        <div>
          <img src="/contact.png" alt="" className="w-[80px] h-[80px]" />
        </div>
        <div className="  flex flex-col gap-y-2 text-white">
          <h1>Welcome Back!</h1>
          <p>John Doe</p>
          <p className=" whitespace-nowrap ">17 July 2024,9:40 pm</p>
        </div>
      </div>
      <div className="flex justify-center mt-[20px] gap-1">
        <img src="/logout.png" alt="" className="w-[20px]" />
        <button className="text-white">Logout</button>
      </div>

      <div className="mt-[20px] h-[2vw]"></div>
      <ScrollArea className="h-[90vh] w-[18vw]  ">
        <div className="p-4 text-white">
          <>
            <button className="mb-4 text-sm font-semibold leading-none flex items-center gap-3 hover:underline text-[20px] ">
              <img src="/dashboard.png" alt="" className="w-[30px] h-[30px]" />
              Dashboard
            </button>
            <Separator className="my-2" />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <img src="/deptt.png" alt="" className="w-[30px] h-[30px]" />
                  Department{" "}
                </AccordionTrigger>
                <AccordionContent>Development</AccordionContent>
                <AccordionContent>Testing</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <img src="/star.png" alt="" className="w-[30px] h-[30px]" />
                  Designation
                </AccordionTrigger>
                <AccordionContent>Junior</AccordionContent>
                <AccordionContent>Senior</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <img src="/staff.png" alt="" className="w-[30px] h-[30px]" />
                  Employee
                </AccordionTrigger>
                <AccordionContent>Aisiri</AccordionContent>
                <AccordionContent>Deekshith</AccordionContent>
                <AccordionContent>Supreeth</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <img src="/medal.png" alt="" className="w-[30px] h-[30px]" />
                  Award
                </AccordionTrigger>
                <AccordionContent>Employee Award</AccordionContent>
                <AccordionContent>Developer Award</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <img src="/notice.png" alt="" className="w-[30px] h-[30px]" />
                  Notice Board
                </AccordionTrigger>
                <AccordionContent>
                  Use leave request form to apply leave
                </AccordionContent>
                <AccordionContent>
                  Attend Social Welfare program on 29th July
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <img
                    src="/holiday.png"
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                  Holiday
                </AccordionTrigger>
                <AccordionContent>17th Declared Holiday</AccordionContent>
                <AccordionContent>4th Saturday Holiday</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <img src="/attend.png" alt="" className="w-[30px] h-[30px]" />
                  Attendance
                </AccordionTrigger>
                <AccordionContent>19/21</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <img src="/leave.png" alt="" className="w-[30px] h-[30px]" />
                  Leave
                </AccordionTrigger>
                <AccordionContent>Taken 2 days off</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  {" "}
                  <img
                    src="/to-do-list.png"
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                  Task
                </AccordionTrigger>
                <AccordionContent>Bug Bounty admin page</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <img src="/mess.png" alt="" className="w-[30px] h-[30px]" />
                  Message
                </AccordionTrigger>
                <AccordionContent>No new message</AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        </div>
      </ScrollArea>
      {/* <div className="flex gap-[1vw] justify-center py-[10px] bg-gray-800 ">
        <img src="/meeting.png" alt="" className="w-[40px] opacity-65 " />
        <h1 className="text-white flex items-center">Employer Zone</h1>
      </div> */}
    </section>
  );
}
