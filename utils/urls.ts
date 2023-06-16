export const Strapi_Api_Token: string | undefined =
	process.env.NEXT_PUBLIC_BACKEND_API_KEY;

export const Api_Url: string =
	process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:1337";
