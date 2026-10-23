import { motion } from "framer-motion";
export default function Reveal({ as = "div", children, ...p }) {
  const M = motion[as];
  return (
    <M initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.9 }} {...p}>
      {children}
    </M>
  );
}
