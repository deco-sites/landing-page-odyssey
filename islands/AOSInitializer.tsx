import AOS from "aos";
import { useEffect } from "preact/hooks";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <></>;
}
