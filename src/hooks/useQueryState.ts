import { useState } from 'react';

export const useQueryState = <TData>() => {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  return { data, loading, error, setData, setLoading, setError };
};
