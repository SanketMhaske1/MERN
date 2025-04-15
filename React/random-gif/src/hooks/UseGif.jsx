import React, { useEffect, useState } from "react";

const apiKey = "kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S";
const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;

function Tag(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);

  const getRadomGif = async (tag) => {
    setLoading(true);
    const response = await fetch(tag ? tagUrl : randomUrl);
    const data = await response.json();
    const imagesSource = data.data.images.downsized_large.url;
    setGif(imagesSource);
    setLoading(false);
  };

  useEffect(() => {
    getRadomGif(tag);
  }, []);

  return {
    gif,
    loading,
    getRadomGif,
  };
}

export default Tag;
