import { apiClient } from "../client";
import useSWR, { SWRHook } from "swr";
import useSWRMutation from "swr/mutation";
import { CreateUserDto, UpdateUserDto } from "../aspida/@types";

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
    commit: async (data: UpdateUserDto) =>
      mutate(async (prev) => {
        if (!prev) return prev;
        const next = { ...prev, ...data };
        await apiClient.users._id(id).$put({ body: next });
        return next;
      }),
    destroy: async () =>
      mutate(async (prev) => {
        if (!prev) return prev;
        await apiClient.users._id(id).$delete();
        return undefined;
      }),
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
