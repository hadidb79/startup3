"use client";
import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API = "https://65aec62d1dfbae409a758845.mockapi.io/api/v1/articles";
let initialPageParam = 0

export default function useGetData() {
  const {data,fetchNextPage} = useInfiniteQuery({ 
    enabled: true,
    queryKey: ["works"],
    queryFn: async ({pageParam=0}) => {
      const res = await axios.get(API);
      return res.data.slice(pageParam , pageParam + 4)
      
    },
    initialPageParam: initialPageParam,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => lastPage.length< 4 ? undefined : lastPageParam +4,
    
  });
  
  return { data ,fetchNextPage };
}
