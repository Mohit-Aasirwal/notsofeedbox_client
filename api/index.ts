import { Api_Url, Strapi_Api_Token } from "@/utils/urls";
import axios from "axios";

const api = axios.create({
  baseURL: Api_Url,
  headers: {
    Authorization: `Bearer ${Strapi_Api_Token}`,
  },
});

// Hero section
export const getHero = async () => {
  const response = await api.get("/api/headers?populate=*");
  return response.data;
};

// Stats section
export const getStats = async () => {
  const response = await api.get("/api/stats");
  return response.data;
};

// Timeline section
export const getTimeline = async () => {
  const response = await api.get("/api/timelines");
  return response.data;
};

// Achievement section
export const getAchievements = async () => {
  const response = await api.get("/api/achievements?populate=*");
  return response.data;
};

// Events section
export const getEvents = async () => {
  const response = await api.get("/api/events");
  return response.data;
};

// Team section
export const getTeam = async () => {
  const response = await api.get("/api/teams?populate=*");
  return response.data;
};
