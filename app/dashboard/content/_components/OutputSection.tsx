"use client";
import React, { useEffect, useRef } from "react";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface OUTPUTSECTIONPROPS {
  output: string;
}

function OutputSection({ output }: OUTPUTSECTIONPROPS) {
  const editorRef: any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(output);
  }, [output]);

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
      <Editor
        ref={editorRef}
        initialValue="Your result will be displayed here."
        initialEditType="wysiwyg" // what you see is what you get
        height="600px"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default OutputSection;
