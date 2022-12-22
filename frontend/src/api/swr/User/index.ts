import { apiClient } from "../../client";
import useSWR, { SWRHook } from "swr";
import useSWRMutation from "swr/mutation";
import { CreateUserDto, UpdateUserDto } from "../../aspida/@types";
import {useCallback} from 'react'
import {normalize} from './normalizr'

export const useUsers = (query?: {
  name?: string;
  page?: number;
  size?: number;
}) => {
  const { data, error, isLoading, mutate } = useSWR(`/users`, async (url) => {
    return apiClient.users.$get({ query }).then(r => r.map(normalize));
  });

  return {
    data,
    isLoading,
    isError: error,
    destory: useCallback((id: number)=> {
      return mutate(
        async (prev) => {
          if(!prev) return prev
          await apiClient.users._id(id).$delete()
          const targetIndex = prev.findIndex(r => r.id === id)
          const from = prev?.slice(0,targetIndex)
          const end = prev?.slice(targetIndex + 1)
          return [...from, ...end]
        }
      )
    },[mutate])
  };
};

export const useUser = (id: number) => {
  const { data, error, isLoading, mutate, isValidating } = useSWR(
    `/user/${id}`,
    () => {
      return apiClient.users._id(id).$get().then(r=> r && normalize(r))
    }
  );
  return {
    data,
    isLoading,
    error,
    mutate,
    commit: useCallback(async (data: UpdateUserDto) =>
      mutate(async (prev) => {
        if (!prev) return prev;
        const next = { ...prev, ...data };
        await apiClient.users._id(id).$put({ body: next });
        return next;
      }), [mutate,id]),
    destroy: useCallback(async () =>
      mutate(async (prev) => {
        if (!prev) return prev;
        await apiClient.users._id(id).$delete();
        return undefined;
      }), [mutate,id]),
    isValidating,
  };
};

export const useUserCreate = () => {
  const result = useSWRMutation(
    `/users`,
    async (url: string, { arg }: { arg: CreateUserDto }) => {
      const res = await apiClient.users.$post({ body: arg });
      return res;
    }
  );
  return result;
};
