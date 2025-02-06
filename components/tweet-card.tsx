import { TweetCard } from "@/components/tweet";
import { motion } from "framer-motion";

export default async function App() {
  return (
    <div>
      <h2 className="font-medium">tweets</h2>
      <br />
      <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
        <TweetCard id="1863464969867792601" />
        <TweetCard id="1863104783042871774" />
      </div>
    </div>
  );
}
