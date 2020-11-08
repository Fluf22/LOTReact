import { useState, useEffect, useMemo } from "react";
import Fuse from 'fuse.js';

export const usePagination = (fullData: any[]): { isPaginationReady: boolean, paginatedData: any[], pageCount: number, pageIndex: number, onPaginationChange: (page: number) => void } => {
	const [pageIndex, setPageIndex] = useState<number>(1);
	const [paginatedData, setPaginatedData] = useState<any[]>(fullData.slice(0, 10) ?? []);

	useEffect(() => {
		const startIndex = pageIndex * 10 - 10;
		setPaginatedData(fullData.slice(startIndex, startIndex + 10));
	}, [fullData, pageIndex]);

	const pageCount = useMemo(() => {
		return Math.trunc(fullData.length / 10) + 1;
	}, [fullData]);

	if (paginatedData.length === 0) {
		return {
			isPaginationReady: false,
			paginatedData,
			pageCount: 0,
			pageIndex: 1,
			onPaginationChange: () => { }
		};
	} else {
		return {
			isPaginationReady: true,
			paginatedData,
			pageCount,
			pageIndex,
			onPaginationChange: setPageIndex
		};
	}
};

export const useFuzzySearch = (data: any[]): { filteredData: any[], onSearchTermChange: (search: string) => void } => {
	const [searchTerm, setSearchTerm] = useState<string>("");

	const fuse = useMemo(() => {
		const fuseOpts = {
			keys: [{
				name: "name",
				weight: 7
			}, {
				name: "race",
				weight: 2
			}, {
				name: "gender",
				weight: 1
			}]
		};
		const fuseIndex = Fuse.createIndex(fuseOpts.keys, data)
		return new Fuse(data, fuseOpts, fuseIndex);
	}, [data]);

	const filteredData = useMemo(() => {
		console.log(fuse.search(searchTerm))
		console.log(searchTerm)
		return fuse.search(searchTerm).map(el => el.item);
	}, [searchTerm, fuse]);

	if (searchTerm === "") {
		return {
			filteredData: data,
			onSearchTermChange: (search: string) => setSearchTerm(search)
		};
	} else {
		return {
			filteredData,
			onSearchTermChange: (search: string) => setSearchTerm(search)
		};
	}
};
