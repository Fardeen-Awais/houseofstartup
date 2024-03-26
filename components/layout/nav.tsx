import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";

export default async function Nav() {
  // TODO: hum home, about , service aur contact add kray gay badh mai resources ajay ga.
  return <Navbar/>;
}
