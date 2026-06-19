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
        status: "APPROVED",
      },
    });

    return NextResponse.json({
      success: true,
      student: updated,
    });
  } catch (error: any) {
    console.error("APPROVE ERROR:", error);

    return NextResponse.json(
      {
        error: "Approve failed",
        message: error.message,
      },
      { status: 500 }
    );
  }
}