"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import React from "react";

function CopyButton({ aiResponse }: any) {
  return (
    <div>
      <Button
        variant="ghost"
        className="text-primary"
        onClick={() => {
          navigator.clipboard.writeText(aiResponse);
          toast({
            title: "Text Copied to Clipboard",
          });
        }}
      >
        Copy
      </Button>
    </div>
  );
}

export default CopyButton;
