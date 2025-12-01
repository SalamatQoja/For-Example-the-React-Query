import { api } from "../api/api";
import type { universityPayload } from "../features/types";

export const fetchUniversity = async(): Promise<universityPayload[]> => {
    const res = await api.get<universityPayload[]>("/search?country=Uzbekistan");
    return res.data;
};