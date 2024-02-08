"use client";

import { useState, ReactNode } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";

function DetailsToggle({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(true);

  return (
    <Collapsible.Root open={show} onOpenChange={setShow}>
      <Collapsible.CollapsibleTrigger>
        <p className="mt-2 flex gap-1 items-center text-accent">
          {show ? "Hide" : "Show"} details
          <ChevronDown
            className={`transition-transform duration-300 ${
              show ? "rotate-180" : "rotate-0"
            }`}
          />
        </p>
      </Collapsible.CollapsibleTrigger>
      <Collapsible.Content className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

export default DetailsToggle;
