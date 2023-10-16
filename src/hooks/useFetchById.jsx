import { useEffect } from "react";
export default function useFetchById(id) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchRequestById = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACK_END_URL}/api/HTTP/request/${id}/`
          );
          setData(response.data);
        } catch (error) {
          console.error("Error fetching request by ID:", error);
        }
      };
      fetchRequestById();
    }
  }, [id]);

  return data;
}
