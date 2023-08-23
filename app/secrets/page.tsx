import Link from 'next/link';
import { options } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import Users from './Users'

export default async function Secrets() {
  const data = await getServerSession(options)
  return (
    <div className="jumbotron text-center mt-5">
      {data
        &&
        <div>
          <h1>{JSON.stringify(data)}</h1>
          <Link className="btn btn-light btn-lg" href="/auth/signout" role="button">Log Out</Link>
        </div>
      }
      <i className="fas fa-user-secret fa-6x"></i>
      <div className="container box mt-5">
        <Link className="btn btn-dark btn-lg" href="/submit" role="button">Submit a Secret</Link>
        <hr />
        <h1 className="display-3 my-4">I hope you don't find out it was me!</h1>
        <Users />
      </div>
    </div>
  );
}
