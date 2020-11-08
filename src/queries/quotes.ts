import axios, { AxiosRequestConfig } from "axios";
import { useQuery } from "react-query";

const useQuotes = (axiosCfg: AxiosRequestConfig) => {
	return useQuery("quotes", () => axios.request({
		url: "/quote",
		...axiosCfg
	}).then((res) => res.data));
};

export default useQuotes;
