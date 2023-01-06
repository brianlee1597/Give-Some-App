import { useEffect, useState } from "react";

export default function useFetch(url: string): {
  loading: boolean;
  data: any;
  error: any;
} {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = async (): Promise<void> => {
    try {
      const res: any = await fetch(url).then((r) => r.json());
      setData(res);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error };
}
