import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import client from "@/db";

// const client = new PrismaClient()

export default async function Home() {
  const user = await client.user.findFirst();
  // const user = await fetchData();


  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center h-screen">
        <div className="border p-5 m-5 border-green-500">
          {user?.username}
          <br />
          {user?.password}
        </div>
      </div>
    </div>
  );
}



