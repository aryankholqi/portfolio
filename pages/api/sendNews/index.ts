import connectToDB from "@/configs/db";
import { NextApiRequest, NextApiResponse } from "next";
import newsLetterModel from "@/models/NewsLetter";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();
  switch (req.method) {
    case "POST": {
      try {
        const { email } = req.body;
        if (!email.trim) {
          return res.status(422).json({ message: "email couldn't be empty" });
        }
        await newsLetterModel.create({ email });
        return res
          .status(201)
          .json({ message: "Your email has been successfully added." });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }
    default: {
      return false;
    }
  }
};

export default handler;
