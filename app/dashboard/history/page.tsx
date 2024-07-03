import Templates from "@/app/(data)/Templates";
import { db } from "@/utils/db";
import { AIOutputSchema } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import React from "react";
import { TEMPLATE } from "../_components/TemplateList";
import Image from "next/image";
import CopyButton from "./_components/CopyButton";

export interface HISTORY {
  id: Number;
  formData: string;
  templateSlug: string;
  aiResponse: string | null;
  createdBy: string | null;
  createdAt: string | null;
}

async function History() {
  const user = await currentUser();

  if (!user?.primaryEmailAddress?.emailAddress) {
    return null;
  }

  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutputSchema)
    .where(
      eq(AIOutputSchema?.createdBy, user?.primaryEmailAddress?.emailAddress)
    )
    .orderBy(desc(AIOutputSchema.id));

  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | any = Templates.find(
      (item) => item.slug == slug
    );
    return template;
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">
        Search your previously generate AI content
      </p>
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>
      {HistoryList.map((item: HISTORY, index: number) => (
        <>
          <div className="grid grid-cols-7 my-5 py-3 px-3">
            <h2 className="col-span-2 flex gap-2 items-center">
              <Image
                src={GetTemplateName(item?.templateSlug)?.icon}
                width={25}
                height={25}
                alt="icon"
              />
              {GetTemplateName(item.templateSlug)?.name}
            </h2>
            <h2 className="col-span-2 line-clamp-3 mr-3 -ml-12 pr-7">{item?.aiResponse}</h2>
            <h2>{item.createdAt}</h2>
            <h2 className="ml-3">{item.aiResponse && item?.aiResponse.length}</h2>
            <h2 className="-ml-3">
              <CopyButton aiResponse={item.aiResponse} />
            </h2>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}

export default History;
