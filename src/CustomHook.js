import { useEffect, useState } from "react";

export const useCustomButtons = () => {
  const primaryButton = (text) => {
    return <button className="btn btn-primary">{text}</button>;
  };
  const dangerButton = (text) => {
    return <button className="btn btn-danger">{text}</button>;
  };
  const infoButton = (text) => {
    return <button className="btn btn-info">{text}</button>;
  };
  return [primaryButton, dangerButton, infoButton];
};



export const useFetch = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [url]);
  return [data];
};
