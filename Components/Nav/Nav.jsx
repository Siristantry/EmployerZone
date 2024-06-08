"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
export function Nav() {
  const [position, setPosition] = useState("bottom");
  return (
    <section className=" ">
      <div className="w-[90vw] h-[50px] bg-white absolute flex items-center  ">
        <div className=" ">
          <div>
            {" "}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Select Language</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Languages</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">
                    English
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    Hindi
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Telagu
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>{" "}
          </div>
        </div>
        <div className="flex items-center pl-[50vw] gap-x-3">
          <div>
            <button>
              <img src="/message.png" alt="" className="w-[20px] h-[20px] " />
            </button>
          </div>
          <div>
            <button>
              <img src="/tea.png" alt="" className="w-[30px] h-[30px] " />
            </button>
          </div>
          <div className=" whitespace-nowrap">17 July 2024, 9:40 pm</div>
        </div>
      </div>
    </section>
  );
}
