import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleClick = () => {
        addAlbum(user);
    }

    let content;
    if (isFetching) {
        content = <Skeleton times={3} className="h-10 w-full" />
    } else if (error) {
        content = <div> Error Loading Albums ! </div>
    } else {
        content = data.map((album) => {
            return <AlbumsListItem key={album.id} album={album} />
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Albums by {user.name}</h3>
                <Button loading={ results.isLoading } onClick={handleClick}>
                    + Add Album
                </Button>
            </div>
            <div> {content} </div>
        </div>
    );
}

export default AlbumsList;