"use client";
import { useEffect, useState } from "react";

const secret =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvd3ZvanRpaWVlbnR1d2VseGtnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTE1NjA5NCwiZXhwIjoyMDQ2NzMyMDk0fQ.Ak0z3Yth8fvqeI-elW-zh906yVgujmryIsWuCUZItoE";

const headers = {
  Authorization: "Bearer " + secret,
  apiKey: secret,
  "Content-Type": "application/json",
};

const BASE_URL = "https://vowvojtiieentuwelxkg.supabase.co/rest/v1/";
// const headers = {
//   Authorization: "Bearer " + process.env.API_SECRET_KEY,
//   apiKey: process.env.API_SECRET_KEY,
// };

const useFetch = ({ key = "" }) => {
  const [data, setData] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  const [elements, setElements] = useState([]);
  const [persianPostElements, setPersianPostElements] = useState([]);
  const [englishPostElements, setEnglishPostElements] = useState([]);
  const [loading, setloading] = useState(true);

  // getData
  const GetData = async () => {
    try {
      const response = await fetch(`${BASE_URL}posts`, { headers });
      setTimeout(async () => {
        const result = await response.json();
        setData(result);
      }, 1000);
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };
  // Get Post BY ID
  const GetPostBYID = async () => {
    if (key)
      try {
        const response = await fetch(
          `${BASE_URL}posts?or=(id.eq.${key},original_post_id.eq.${key})`,
          {
            headers,
          }
        );
        // setTimeout(async () => {

        // }, 2000);
        const result = await response.json();
        setSinglePost(result);
      } catch (error) {
        console.error(error);
      } finally {
        setloading(false);
      }
  };
  // Get Elements
  const GetElements = async () => {
    try {
      const response = await fetch(`${BASE_URL}elements`, {
        headers,
      });
      const result = await response.json();
      setElements(result);
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };
  // Get Post Elements By Id english elements
  const GetPostElementsByIdeng = async () => {
    if (key)
      try {
        const response = await fetch(`${BASE_URL}elements?post_id=eq.${key}`, {
          headers,
        });
        const result = await response.json();
        setEnglishPostElements(result);
      } catch (error) {
        console.error(error);
      } finally {
        setloading(false);
      }
  };
  // Get Post Elements By Id persian elements
  const GetPostElementsByIdIR = async () => {
    if (key)
      try {
        const response = await fetch(
          `${BASE_URL}elements?post_id=eq.${Number(key) + 1}`,
          {
            headers,
          }
        );
        const result = await response.json();
        setPersianPostElements(result);
      } catch (error) {
        console.error(error);
      } finally {
        setloading(false);
      }
  };
  useEffect(() => {
    GetData();
    GetElements();
    GetPostBYID();
    GetPostElementsByIdeng();
    GetPostElementsByIdIR();
  }, []);
  return {
    data,
    singlePost,
    elements,
    persianPostElements,
    englishPostElements,
    loading,
  };
};

export default useFetch;
