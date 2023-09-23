import axios, { AxiosError } from "axios";

export const queryClient = (token?: string) =>
	axios.create({
		baseURL: "https://backend.getlinked.ai",
		headers: {
			"Content-Type": "application/json",
			...(token && { Authorization: `Bearer ${token}` })
		}
	});
