import {NextApiRequest, NextApiResponse} from "next";
import {ResponseType} from "@/utils/enum";
import {API_URL} from "@/utils/constants";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) res.status(400).json({type: ResponseType.FAILED, message: 'Failed to fetch data'});
    const responseData = await response.json();
    res.status(200).json({type: ResponseType.SUCCESS, data: responseData.data ?? []});
  } catch (error) {
    const err = error as Error;
    res.status(500).json({type: ResponseType.FAILED, message: err.message});
  }
}

export default handler;
