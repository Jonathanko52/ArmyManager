

function navBar({logState, dynamoTest,dynamoTest2}){
    return (
      <div className="font-bold underline border-black col-span-1 row-span-6	border-2">
      TEST
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