"use client";
import React, { useEffect, useRef } from "react";

import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface OUTPUTSECTIONPROPS {
  output: string;
}

function OutputSection({ output }: OUTPUTSECTIONPROPS) {

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Result</h2>
        <Button
          variant={"secondary"}
          onClick={() => {
            navigator.clipboard.writeText(output);
            toast({
              title: "Text Copied to Clipboard",
            });
          }}
        >
          <Copy size={20} className="mr-3" />
          Copy to Clipboard
        </Button>
      </div>
      <div>
        <div className="p-5">
          <div className="h-96 overflow-y-auto">
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutputSection;
