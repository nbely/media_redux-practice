import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        loading={results.isLoading}
        onClick={handleRemoveAlbum}
      >
        <GoTrashcan />
      </Button>
      {results.error && <div>Error deleting album.</div>}
      {album.title}
    </>
  );

  return (
    <ExpandablePanel header={header}>
      List of photos in the album
      {/* <PhotosList album={album} /> */}
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
