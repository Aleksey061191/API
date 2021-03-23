import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export const DebounceExample = () => {
  const [text, setText] = useState("Translate");
  const debounceText = useDebounce(text, 800);
  useEffect(() => {
      fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", {
    	"method": "GET",
    	"headers": {
    		"accept-encoding": "application/gzip",
    		"x-rapidapi-key": "SIGN-UP-FOR-KEY",
    		"x-rapidapi-host": "google-translate1.p.rapidapi.com"
    	}
    })
    .then(response => {
	    console.log(response);
    })
    .catch(err => {
	    console.error(err);
    });
  }, [debounceText]);

  return (
    <>
      <p>{debounceText}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
};
