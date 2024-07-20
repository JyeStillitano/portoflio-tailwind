import sendEmail from "../../utils/ContactEmail";
import { NextApiRequest, NextApiResponse } from "next";

//export async function POST(
//  req: NextApiRequest,
//) {
//  const res = await sendEmail(
//    "Test",
//    "<p>Test</p>"
//  )
//  return Response.json({ message: res })
//}

export async function POST (req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendEmail(
      "Test",
      "<p>Test</p>"
    )
    res.status(200).send("Success");
  } catch (err) {
    console.log("error")
  }
};

export default POST;