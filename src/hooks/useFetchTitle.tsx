import { useState, useEffect } from "react";
import { Title } from "../classes/Title";
function useFetchTitle() {
  const [title, setTitle] = useState<String[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://poetrydb.org//title`)
      .then((response) => response.json())
      .then((json) => setTitle(() => [...json.titles]))
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  });
  console.log(title);
  return { title, isLoading };
}
export default useFetchTitle;
