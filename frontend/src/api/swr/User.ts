import { apiClient } from "../client";
import useSWR, { SWRHook } from "swr";
import useSWRMutation from "swr/mutation";
import { CreateUserDto, UpdateUserDto } from "../aspida/@types";
import {useCallback} from 'react'

export const useUsers = (query?: {
  name?: string;
  page?: number;
  size?: number;
}) => {
  const { data, error, isLoading } = useSWR(`/users`, async (url) => {
    return apiClient.users.$get({ query });
  });

  return {
    data,
    isLoading,
    isError: error,
  };
};

export const useUser = (id: number) => {
  const { data, error, isLoading, mutate, isValidating } = useSWR(
    `/user/${id}`,
    apiClient.users._id(id).$get
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
      }), [id]),
    destroy: useCallback(async () =>
      mutate(async (prev) => {
        if (!prev) return prev;
        await apiClient.users._id(id).$delete();
        return undefined;
      }), [id]),
    isValidating,
  };
};

export const useUserCreate = () => {
  const result = useSWRMutation(
    `/user`,
    async (url: string, { arg }: { arg: CreateUserDto }) => {
      const res = await apiClient.users.$post({ body: arg });
      return res;
    }
  );
  return result;
};
