"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateList";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AIModel";
import { db } from "@/utils/db";
import { AIOutputSchema } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

interface CONTENTPROPS {
  params: {
    "template-slug": string;
  };
}

function CreateContent(props: CONTENTPROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug == props.params["template-slug"]
  );

  const { user } = useUser();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOuput] = useState<string>("");

  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );

  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= 10000) {
      router.push("/dashboard/billing");
      return toast({
        title: "Credit Limit Exceeded",
        description: "Please upgrade your plan to continue using the service",
      });
    }
    setLoading(true);
    const selectedTemplatePrompt = selectedTemplate?.aiPrompt;

    const finalAIPrompt =
      JSON.stringify(formData) + ", " + selectedTemplatePrompt;

    const result = await chatSession.sendMessage(finalAIPrompt);
    setAiOuput(result.response.text());
    await SaveInDB(formData, selectedTemplate?.slug, result.response.text());
    setLoading(false);

    setUpdateCreditUsage(Date.now());
  };

  const SaveInDB = async (
    formData: any,
    selectedTemplateSlug: any,
    aiResp: string
  ) => {
    const result = await db.insert(AIOutputSchema).values({
      formData: formData,
      templateSlug: selectedTemplateSlug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress || "Anonymous",
      createdAt: moment().format("DD/MM/YYYY"),
    });

    // console.log(result);
  };

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
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
          generateButton={true}
        />

        <div className="col-span-2 p-5 shadow-lg border rounded-lg bg-white">
          <OutputSection output={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateContent;
