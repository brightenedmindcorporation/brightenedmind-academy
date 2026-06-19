import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { studentId } = await req.json();

    if (!studentId) {
      return NextResponse.json(
        { error: "studentId required" },
        { status: 400 }
      );
    }

    const updated = await prisma.user.update({
      where: {
        id: studentId,
      },
      data: {
        status: "REJECTED",
      },
    });

    return NextResponse.json({
      success: true,
      student: updated,
    });
  } catch (error: any) {
    console.error("REJECT ERROR:", error);

    return NextResponse.json(
      {
        error: "Reject failed",
        message: error.message,
      },
      { status: 500 }
    );
  }
}