import { useLoaderData } from "react-router-dom"
import User from "../User/User";

export default function Users() {
    const users = useLoaderData();
  return (
    <div>
        <h4 className="text-2xl text-fuchsia-600">Users: {users.length}</h4>
        <div className="grid grid-cols-3 gap-5">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    </div>
  )
}
