import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
export default function Modal({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div id="mod" className="on" style={{ display: "flex" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}>
          <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95 }}>
            <div className="glass box">{children}</div>
            <div style={{ textAlign: "center" }}>
              <button className="btn x" onClick={onClose}><X size={16} style={{ verticalAlign: "-2px" }} /> Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
