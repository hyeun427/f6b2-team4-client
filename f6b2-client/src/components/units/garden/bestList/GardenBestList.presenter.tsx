import { GardenBestListBox } from './GardenBestList.styles';
import { motion } from 'framer-motion';
import GardenBestBox from './GardenBestBox';
import { v4 as uuidv4 } from 'uuid';

export default function GardenBestListUI(props) {
  return (
    <GardenBestListBox>
      {/* <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <GardenBest src="https://picsum.photos/200" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <GardenBest src="https://picsum.photos/200" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <GardenBest src="https://picsum.photos/200" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <GardenBest src="https://picsum.photos/200" />
      </motion.div> */}
      {props.data?.fetchBoards.map((el, index) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          key={String(uuidv4())}
        >
          <GardenBestBox el={el} />
        </motion.div>
      ))}
    </GardenBestListBox>
  );
}
