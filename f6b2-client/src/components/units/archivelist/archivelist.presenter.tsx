import * as Archive from './archivelist.style';
import { BsBookmark } from 'react-icons/bs';
import ArchiveItemUI from './archivelistitem.presenter';
import { IArchive } from './archivelist.type';
import { v4 as uuidv4 } from 'uuid';

export default function ArchiveUI(props: IArchive) {
  // react slick setting
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    rows: 1,
    slidesPerRow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Archive.WrapperDiv>
      <Archive.WrapperRow>
        <BsBookmark style={{ margin: '5' }} />
        Archive
      </Archive.WrapperRow>
      {props.data?.fetchSavedBoards.filter((el) => el.isSaved === true)
        .length === 0 ? (
        <>
          <Archive.ImageNodata src={'/image/default3.jpg'} />
          <Archive.PNodata>Leave your records here</Archive.PNodata>
          <Archive.PNodataSub>Build your hive</Archive.PNodataSub>
        </>
      ) : (
        <>
          <Archive.InputSearchBar placeholder='Search' />
          <Archive.WrapperColItem>
            <Archive.SliderTab {...settings}>
              {props.data?.fetchSavedBoards
                .filter((el) => el.isSaved === true)
                .map((el) => (
                  <ArchiveItemUI key={String(uuidv4())} el={el} />
                ))}
            </Archive.SliderTab>
          </Archive.WrapperColItem>
        </>
      )}
    </Archive.WrapperDiv>
  );
}
