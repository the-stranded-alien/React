import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers, addUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Skeleton from "./Skeleton";
import Button from "./Button";
import UsersListItem from "./UsersListItem";


function UsersList() {

    // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    // const [loadingUsersError, setLoadingUsersError] = useState(null);
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);

    // const [isCreatingUser, setIsCreatingUser] = useState(false);
    // const [creatingUserError, setCreatingUserError] = useState(null);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data } = useSelector((state) => {
        return state.users;
    })

    // useEffect(() => {
    //     setIsLoadingUsers(true);
    //     dispatch(fetchUsers())
    //         .unwrap() // Unwrap to handle unexpected behaviour of dispatch returned promise
    //         .catch((err) => setLoadingUsersError(err))
    //         .finally(() => setIsLoadingUsers(false));
    // }, [dispatch]);

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);


    // const handleUserAdd = () => {
    //     setIsCreatingUser(true);
    //     dispatch(addUser())
    //         .unwrap()
    //         .catch((err) => setCreatingUserError(err))
    //         .finally(() => setIsCreatingUser(false))
    // };

    const handleUserAdd = () => {
        doCreateUser();
    };

    let content;

    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" />;
    } else if (loadingUsersError) {
        content = <div> Error Fetching Data... </div>;
    } else {
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user} />;
        })
    }

    return (
      <div>
          <div className="flex flex-row justify-between items-center m-3">
              <h1 className="m-2 text-xl"> Users </h1>
              <Button loading={isCreatingUser} onClick={handleUserAdd}> + Add User </Button>
              {creatingUserError && "Error Creating User ... " }
          </div>
          { content }
      </div>
    );
}

export default UsersList;