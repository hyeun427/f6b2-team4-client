import { GardenBest, GardenBestListBox } from './GardenBestList.styles';
import { motion } from 'framer-motion';

export default function GardenBestListUI() {
  return (
    <GardenBestListBox>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <GardenBest src='https://picsum.photos/200' />
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <GardenBest src='https://picsum.photos/200' />
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <GardenBest src='https://picsum.photos/200' />
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <GardenBest src='https://picsum.photos/200' />
      </motion.div>
    </GardenBestListBox>
  );
}
