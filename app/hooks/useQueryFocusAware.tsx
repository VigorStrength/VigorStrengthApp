import React, { useCallback, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { NotifyOnChangeProps, QueryKey, useQuery } from "@tanstack/react-query";

type Props = {
  queryKey: QueryKey;
  queryFn: () => Promise<any>;
  notifyOnChangeProps?: NotifyOnChangeProps;
};

function useQueryFocusAware({ queryKey, queryFn, notifyOnChangeProps }: Props) {
  const focusedRef = useRef(true);

  useFocusEffect(() => {
    useCallback(() => {
      focusedRef.current = true;

      return () => {
        focusedRef.current = false;
      };
    }, []);
  });

  return () =>
    focusedRef.current
      ? useQuery({
          queryKey,
          queryFn,
          enabled: () => focusedRef.current,
          notifyOnChangeProps,
        })
      : [];
}

export default useQueryFocusAware;
