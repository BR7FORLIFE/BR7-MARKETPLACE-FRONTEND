import { useQuery } from "@tanstack/react-query";
import { meFetch } from "@lib/api-client";
import { type  Me} from '@lib/schemas/auth/auth-schema'

function useUser(){
  return useQuery<Me>({
    queryFn: meFetch,
    queryKey: ["authUser"],
    retry: false,
    staleTime: Infinity,
  });
}

export default useUser;
