import axios from "axios";

// const api = axios.create({
// 	baseURL: process.env.NEXT_PUBLIC_BACKEND_API_KEY,
// 	headers: {
// 		Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_BASE_URL}`,
// 	},
// });

// Hero section
export const getHero = async () => {
	const response = await axios.get("/api/heros?populate=*");
	return response.data;
};

// Stats section
export const getStats = async () => {
	const response = await axios.get("/api/stats");
	return response.data;
};

// Timeline section
export const getTimeline = async () => {
	const response = await axios.get("/api/timelines");
	return response.data;
};

// Achievement section
export const getAchievements = async () => {
	const response = await axios.get("/api/achievements?populate=*");
	return response.data;
};

// Events section
export const getEvents = async () => {
	const response = await axios.get("/api/events");
	return response.data;
};

// Team section
export const getTeam = async () => {
	const response = await axios.get("/api/teams?populate=*");
	return response.data;
};
