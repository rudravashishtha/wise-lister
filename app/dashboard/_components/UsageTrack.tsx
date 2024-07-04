"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutputSchema } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { HISTORY } from "../history/page";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );

  useEffect(() => {
    user && getData();
  }, [user]);

  useEffect(() => {
    user && getData();
  }, [updateCreditUsage && user]);

  const getData = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      return null;
    }
    const result: HISTORY[] = await db
      .select()
      .from(AIOutputSchema)
      .where(
        eq(AIOutputSchema.createdBy, user?.primaryEmailAddress?.emailAddress)
      );

    getTotalUsage(result);
  };

  const getTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total += Number(element.aiResponse?.length);
    });

    setTotalUsage(total);
  };
  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: ((totalUsage / 10000) * 100).toString() + "%",
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10000 Credits Used</h2>
      </div>
      <Link href="/dashboard/billing">
        <Button variant={"secondary"} className="mt-1 w-full text-primary">
          Upgrade
        </Button>
      </Link>
    </div>
  );
}

export default UsageTrack;
