const secret =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvd3ZvanRpaWVlbnR1d2VseGtnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTE1NjA5NCwiZXhwIjoyMDQ2NzMyMDk0fQ.Ak0z3Yth8fvqeI-elW-zh906yVgujmryIsWuCUZItoE";

const headers = {
  Authorization: "Bearer " + secret,
  apiKey: secret,
  "Content-Type": "application/json",
};

const BASE_URL = "https://vowvojtiieentuwelxkg.supabase.co/rest/v1/";

export async function GetPostElementsEnglish(postId) {
  if (postId) {
    const response = await fetch(`${BASE_URL}elements?post_id=eq.${postId}`, {
      headers,
    });
    const elementsEng = await response.json();
    return elementsEng;
  } else return null;
}

export async function GetPostElementsPersian(postId) {
  if (postId) {
    const response = await fetch(
      `${BASE_URL}elements?post_id=eq.${Number(postId) + 1}`,
      { headers }
    );
    const elementsIr = await response.json();
    return elementsIr;
  } else return null;
}
