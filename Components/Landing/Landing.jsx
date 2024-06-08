import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
export function Landing() {
  return (
    <section className="w-[80vw] ">
      <div className="flex justify-center gap-[2vw] pt-[70px]">
        <div className="w-[18vw] h-[100px] bg-white flex justify-center gap-6 items-center shadow-lg rounded-sm ">
          <img src="/department.png" alt="" className="w-[50px] h-[50px]" />
          <div className="flex flex-col">
            <h1 className="text-black">4</h1>
            <h2 className="text-black">DEPARTMENT</h2>
          </div>
        </div>

        <div className="w-[18vw] h-[100px] bg-white flex justify-center gap-6 items-center shadow-lg rounded-sm">
          <img src="/ppl.png" alt="" className="w-[50px] h-[50px]" />
          <div className="flex flex-col">
            <h1 className="text-black">4</h1>
            <h2 className="text-black">TOTAL STAFF</h2>
          </div>
        </div>

        <div className="w-[18vw] h-[100px] bg-white flex justify-center gap-6 items-center shadow-lg rounded-sm ">
          <img src="/user1.png" alt="" className="w-[50px] h-[50px]" />
          <div className="flex flex-col">
            <h1 className="text-black">4</h1>
            <h2 className="text-black">PRESENT STAFF</h2>
          </div>
        </div>

        <div className="w-[18vw] h-[100px] bg-white flex justify-center gap-6 items-center shadow-lg rounded-sm ">
          <img src="/to-do-list.png" alt="" className="w-[50px] h-[50px]" />
          <div className="flex flex-col">
            <h1 className="text-black">2</h1>
            <h2 className="text-black">PENDING TASK</h2>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" w-[25vw] h-[350px] bg-white absolute right-0 top-52  mr-[30px] rounded-md shadow-md">
          <div className="w-[25vw] h-[100px] bg-blue-400 absolute rounded-sm">
            <p
              className=" flex items-center mt-[60px] font-bold text-[20px] absolute"
              style={{
                top: "5%",
                left: "36%",
              }}
            >
              Hello John
            </p>
            <img src="/blue.jpg" alt="" className=" w-[25vw] h-[150px]" />
          </div>
          <div
            className="absolute w-[8vw] h-[8vw] rounded-full bg-black flex justify-center items-center"
            style={{
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src="/contact.png"
              alt=""
              className="w-[6vw] h-[6vw] rounded-full"
            />
          </div>
          <div
            className=" absolute text-black whitespace-nowrap text-sm "
            style={{
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Admin in Administrative Department
          </div>
          <div>
            <button
              className="text-black absolute  border-2  py-[5px] bg-blue-300 shadow-md w-[10vw] whitespace-nowrap rounded-sm text-sm "
              style={{
                top: "85%",
                left: "25%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Change password
            </button>
            <button
              className="text-black absolute  border-2 py-[5px]  bg-green-500 whitespace-nowrap shadow-md w-[10vw] rounded-sm text-sm "
              style={{
                top: "85%",
                left: "75%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Request Leave
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center pr-[26vw] mt-[2.2vw] ">
        <div className="w-[52vw] h-[70px] bg-white flex items-center pl-[20px] rounded-sm shadow-md ">
          <div className="">
            <button className="w-[12vw] h-[50px] bg-red-700  flex items-center rounded-sm ">
              <img
                src="/arrow-right.png"
                alt=""
                className="w-[30px] h-[30px] p-1 "
              />
              <h1 className="text-white">You're Clocked Out!</h1>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center pr-[26vw] mt-[2.2vw] ">
        <div className="w-[52vw] h-[300px] bg-white flex items-center pl-[20px] rounded-sm  shadow-md">
          <ScrollArea className="h-72 w-[52vw] rounded-md ">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-bold leading-none">
                Notice Period
              </h4>
              <Separator className="my-2" />
              <>
                <div className="text-sm">
                  <h1 className="text-[18px]">Urgent and Important</h1>
                  <p className="text-sm">
                    All staff has to use the application for leave request
                  </p>
                </div>
                <Separator className="my-2" />
                <div className="text-sm">
                  <h1 className="text-[18px]">Social Welfare</h1>
                  <p className="text-sm">
                    This is to bring notice that all staff has to join the
                    social welfare program on 29th July
                  </p>
                </div>
                <Separator className="my-2" />
                <div>hi</div>
                <Separator className="my-2" />
                <div>hi</div>
                <Separator className="my-2" />
                <div>hi</div>
                <Separator className="my-2" />
                <div>hi</div>
                <Separator className="my-2" />
                <div>hi</div>
                <Separator className="my-2" />
              </>
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="flex justify-center pr-[26vw] mt-[2.2vw] ">
        <div className="w-[52vw] h-[300px] bg-white flex items-center pl-[20px] rounded-sm  shadow-md">
          <ScrollArea className="h-72 w-[52vw] rounded-md ">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-bold leading-none">
                Employee Stats
              </h4>
              <Separator className="my-2" />
              <>
                <div className="text-sm">hi</div>
                <Separator className="my-2" />
                <div>hi</div>
                <Separator className="my-2" />
                <div>hi</div>
                <Separator className="my-2" />
                <div>hi</div>
                <Separator className="my-2" />
                <div>hi</div>
                <Separator className="my-2" />
                <div>hi</div>
                <Separator className="my-2" />
                <div>hi</div>
                <Separator className="my-2" />
              </>
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}
