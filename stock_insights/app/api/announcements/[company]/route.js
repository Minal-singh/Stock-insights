import { connectDB } from "@/utils/connect_db";
import { Announcement } from "@/models/announcement";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const company = req.url.split("announcements/")[1].split("?")[0];
  const url = new URL(req.url);
  const sort = url.searchParams.get("sort") || "desc";
  const sd =
    typeof url.searchParams.get("sd") !== "object"
      ? new Date(url.searchParams.get("sd"))
      : new Date("2000-01-01T00:00:00.000Z");
  const ed =
    typeof url.searchParams.get("ed") !== "object"
      ? new Date(url.searchParams.get("ed"))
      : new Date("2024-01-01T00:00:00.000Z");
  try {
    await connectDB();
    const announcements = await Announcement.find({
      DT_TM: {
        $gte: sd,
        $lte: ed,
      },
      SCRIP_CD: company,
    }).sort({
      DT_TM: sort,
    });
    return NextResponse.json({ message: "OK", announcements }, { status: 200 });
  } catch (error) {
    return NextResponse.error(error);
  }
};
