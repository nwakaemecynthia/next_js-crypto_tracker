import {NextApiRequest, NextApiResponse} from "next";
import {ResponseType} from "@/utils/enums";
import {BASE_API_URL, currencySymbols} from "@/utils/constants";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ type: ResponseType.FAILED, message: "Method Not Allowed" });
  }

  try {
    const response = await fetch(`${BASE_API_URL}/simple/supported_vs_currencies`);
    if (!response.ok) {
      return res.status(400).json({ type: ResponseType.FAILED, message: "Failed to fetch supported currencies" });
    }

    const data: string[] = await response.json();

    const formattedData = data.map((code) => (
      {
      code: code.toUpperCase(),
      symbol: currencySymbols[code.toUpperCase()]?.symbol || code.toUpperCase(),
      name: currencySymbols[code.toUpperCase()]?.name || code.toUpperCase(),
    }));

    res.status(200).json({ type: ResponseType.SUCCESS, data: formattedData });
  } catch (error) {
    res.status(500).json({ type: ResponseType.FAILED, message: (error as Error).message });
  }
};

export default handler;
