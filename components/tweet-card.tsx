import { TweetCard } from "@/components/tweet";
import { motion } from "framer-motion";

export default async function App() {
  return (
    <div>
      <h2 className="font-medium">tweets</h2>
      <br />
      <div className="flex space-x-6">
        <TweetCard id="1863464969867792601" />
        <TweetCard id="1755580236387823951" />
        <TweetCard id="1864292714067710305" />
      </div>
    </div>
  );
}
