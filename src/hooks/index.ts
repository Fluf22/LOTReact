import { useState, useEffect, useMemo } from "react";

export const usePagination = (fullData: any[]): { isPaginationReady: boolean, paginatedData: any[], pageCount: number, pageIndex: number, onPaginationChange: (page: number) => void } => {
	const [pageIndex, setPageIndex] = useState<number>(1);
	const [paginatedData, setPaginatedData] = useState<any[]>(fullData.slice(0, 10) ?? []);

	useEffect(() => {
		console.log("New data: ", fullData.slice(pageIndex * 10, pageIndex * 10 + 10))
		setPaginatedData(fullData.slice(pageIndex * 10, pageIndex * 10 + 10));
	}, [fullData, pageIndex]);

	const pageCount = useMemo(() => {
		return Math.trunc(fullData.length / 10);
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
