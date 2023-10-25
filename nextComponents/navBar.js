

function navBar({logState, dynamoTest,dynamoTest2}){
    console.log("Navbar?")
    return (
      <div className="font-bold underline border-black col-span-1 row-span-6	border-2">
        <nav>
          <ul>
            <li>
              {/* <Link to="/">Home</Link> */}
            </li>
            <li>
              {/* <Link to="/database">Database</Link> */}
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

export default navBar;