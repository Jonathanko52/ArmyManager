import Link from 'next/link';


function NavBar(){


    return (
      <div className="font-bold col-span-1 row-span-6 border-black border-2">
        <nav>
          <ul>
            <li>
            <Link className="m-4" href="/Army">Army</Link><br></br>
            </li>
            <li>
            <Link className="m-4" href="/Database">Database</Link>
            </li>
          </ul>

          <button >LOG STATE</button>
          <br></br>
          <button >DYNAMOTEST</button>
          <br></br>
          <button >DYNAMOTEST2</button>
        </nav>        
      </div>
      )
}

export default NavBar;