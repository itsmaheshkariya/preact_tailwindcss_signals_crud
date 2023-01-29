import { UserForm } from "./components/UserForm"
import { UserTable } from "./components/UserTable"
export function App() {
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <h1 className=" text-5xl my-9">User Form</h1>
          <UserForm />
        </div>
        <div className="flex-1">
        <h1 className=" text-5xl my-9">User Table</h1>
          <UserTable />
        </div>
      </div>
    </>
  )
}
