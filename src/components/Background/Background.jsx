import { useEffect } from "react";

function Background(props) {
  useEffect(() => {
    // If styled is defined, then use props style.
    // <Background style="<background values go here>" />
    if(props.styleValue) {
      document.body.style.background = props.styleValue;
    } else { // Otherwise default to gradient.
      document.body.style.background = "linear-gradient(163.63deg, #501FC1 12.2%, #C346D5 96.78%)";
    }

    return () => {
      document.body.style.background = "unset";
    }
  });

  return (
    <>
    </>
  );
}

export default Background;