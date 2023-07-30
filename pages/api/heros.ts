import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function heros(req: NextApiRequest, res: NextApiResponse) {
	try {
		const apiUrl =
			process.env.NEXT_PUBLIC_API_BASE_URL + "/api/headers?populate=*";
		const response: any = await axios.get(apiUrl, {
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_KEY}`,
			},
		});
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error);
	}
}
