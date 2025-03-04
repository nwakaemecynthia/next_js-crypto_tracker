import {NextApiRequest, NextApiResponse} from "next";
import {ResponseType} from "@/utils/enums";
import {BASE_API_URL} from "@/utils/constants";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ type: ResponseType.FAILED, message: "Method Not Allowed" });
  }

  try {
    const { vs_currency = "usd" } = req.query;

    const response = await fetch(`${BASE_API_URL}/coins/markets?vs_currency=${vs_currency}&order=market_cap_desc`);

    if (!response.ok) return res.status(400).json({type: ResponseType.FAILED, message: 'Failed to fetch data'});
    const responseData = await response.json();
    return res.status(200).json({type: ResponseType.SUCCESS, data: responseData ?? []});
  } catch (error) {
    const err = error as Error;
    return res.status(500).json({type: ResponseType.FAILED, message: err.message});
  }
}

export default handler;
