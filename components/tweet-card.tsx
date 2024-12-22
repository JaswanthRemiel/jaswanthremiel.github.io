import { TweetCard } from "@/components/tweet";
import { motion } from "framer-motion";

export default async function App() {
  return (
    <div>
      <h2 className="font-medium">tweets</h2>
      <br />
      {/* Use flex-col for mobile and flex-row for larger screens */}
      <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
        <TweetCard id="1863464969867792601" />
        <TweetCard id="1755580236387823951" />
        <TweetCard id="1864292714067710305" />
      </div>
    </div>
  );
}
