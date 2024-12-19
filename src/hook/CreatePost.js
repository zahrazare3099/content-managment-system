"use client";
import { useEffect } from "react";

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

const CreatePost = ({ postData, elementData }) => {
  // create post
  const createPost = async (postData) => {
    if (postData) {
      try {
        const response = await fetch(`${BASE_URL}posts`, {
          headers,
          method: "POST",
          body: JSON.stringify(postData),
        });
        if (response.ok) {
          console.log("Form submitted successfully:");
          const jsonData = await response.json();
          console.log("jsonData", jsonData);
        }
        if (!response.ok) {
          // throw new Error("Network response was not ok");
          return null;
        }
      } catch (error) {
        console.error(error);
      } finally {
        setloading(false);
      }
    } else return null;
  };
  // create Element
  const creatElement = async (elementData) => {
    if (elementData) {
      try {
        const response = await fetch(`${BASE_URL}elements`, {
          headers,
          method: "POST",
          body: JSON.stringify(elementData),
        });
        if (response.ok) {
          console.log("Form submitted successfully:");
          const jsonData = await response.json();
          console.log("jsonData", jsonData);
        }
        if (!response.ok) {
          // throw new Error("Network response was not ok");
          return null;
        }
      } catch (error) {
        console.error(error);
      } finally {
        setloading(false);
      }
    } else return null;
  };
  useEffect(() => {
    createPost(postData);
    creatElement(elementData);
  }, [postData, elementData]);
  return { createPost, creatElement };
};

export default CreatePost;
