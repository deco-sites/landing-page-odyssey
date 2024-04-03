import AOS from "aos";
import { useEffect } from "preact/hooks";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 300,
    });
  }, []);

  return <></>;
}
