import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/prismaClient"; // Ensure the Prisma client is correctly set up

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const getUserBlockStatus = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query;

  if (!email || typeof email !== "string" || !validateEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format. Please provide a valid email.",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { blockedstatus: true },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User block status retrieved successfully.",
      blockedstatus: user.blockedstatus,
    });
  } catch (error) {
    console.error("Error fetching user block status:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user block status. Please try again later.",
    });
  }
};

const updateUserBlockStatus = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, blockStatus } = req.body;

  if (!email || typeof blockStatus !== "string" || !validateEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid data. Ensure email and blockStatus are provided correctly.",
    });
  }

  if (blockStatus !== "true" && blockStatus !== "false") {
    return res.status(400).json({
      success: false,
      message: "Invalid blockStatus value. Use 'true' or 'false'.",
    });
  }

  try {
    const user = await prisma.user.update({
      where: { email },
      data: { blockedstatus: blockStatus === "true" },
    });

    return res.status(200).json({
      success: true,
      message: "User block status updated successfully.",
      user,
    });
  } catch (error) {
    console.error("Error updating user block status:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update block status. Please try again later.",
    });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getUserBlockStatus(req, res);
    case "POST":
    case "PUT":
      return updateUserBlockStatus(req, res);
    default:
      return res.status(405).json({
        success: false,
        message: "Method Not Allowed. Please use GET, POST, or PUT.",
      });
  }
}