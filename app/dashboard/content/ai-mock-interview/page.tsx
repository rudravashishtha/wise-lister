"use client"
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TEMPLATE } from "../../_components/TemplateList";
import Templates from "@/app/(data)/Templates";
import FormSection from "../_components/FormSection";


function AIMockInterview() {
  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug == "ai-mock-interview"
  );
  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button className="px-3">
          <ArrowBigLeft size={22} className="mr-3" /> Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={() => {}}
          loading={false}
          generateButton={false}
        />
        <div className="col-span-2 p-5 shadow-lg border rounded-lg bg-white py-5">
          Visit the{" "}
          <Link href="https://protomock.vercel.app" target="_blank">
            Website
          </Link>{" "}
          to get started.
        </div>
      </div>
    </div>
  );
}

export default AIMockInterview;
