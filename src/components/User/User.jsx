
export default function User({user}) {
    const{id, name, email} = user
  return (
    <div className="border w-fit p-6 text-fuchsia-800">
        <p>{id}</p>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
  )
}
