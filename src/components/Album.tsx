import { ReactElement, FC } from "react";
import AlbumData from "../utils/AlbumData";
import Page from "./Page";

const Album: FC<any> = ({ album }: { album: AlbumData }): ReactElement => {

  return (
    <div >
      {album.pages.map((page, i) => 
          <Page key="{i}" page={page} />
      )}
    </div>
  );
};

export default Album;
