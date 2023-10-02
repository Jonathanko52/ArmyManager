import React, {useState} from 'react';




function MainPage(){

  const [age, setAge] = useState(28);

    return (
        <div className="text-3xl font-bold underline border-black col-span-6 row-span-5">
          Mainpage
        </div>
      )
}

export default MainPage;