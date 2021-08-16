import React, { useState  } from "react";
import Axios from "axios";



function PostForm( ) { 
 

   const url =" https://maliatko.herokuapp.com/json/kindergartenList"






  const [data, setData] = useState(` `);


  function submit(e) {
   
    e.preventDefault();
    Axios.post (url, { 
      id: data.id,
      name: data.name,
      number: data.number,
      address: data.address,
      userParentOne_birthDate: data.userParentOne_birthDate,
    }).then((res) => {
      console.log(res.data);
      
    })
    .catch ((error=> {
     (console.error(error))
    }
      ))
  }
 
  

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

 function keyPress (e) {
  const newData = { ...data };
  newData[e.target.id] = e.target.value;
  setData(newData);
  console.log(newData);
  
 }
 

  return (
    <div className="Form">
      <form onSubmit={(e) => submit(e)} onKeyPress={(e) => keyPress(e)}>
        <p>
          <u>Загальна Інформація </u>
        </p>
        <label /> Прізвище:
        <input
          onChange={(e) => handle(e)}
          id="PostFormurName"
          value={data.PostFormurName}
          placeholder="Бондарюк"
          type="text"
        />
        <br />
        <label />
        Ім’я:
        <input
          onChange={(e) => handle(e)}
          id="kidName"
          value={data.kidName}
          placeholder="Богдан"
          type="text"
        />
        <br />
        <label />
        По-батькові:
        <input
          onChange={(e) => handle(e)}
          id="kidFatherName"
          value={data.kidFatherName}
          placeholder="Степанович"
          type="text"
        />
        <br />
        <label />
        Дата народження:
        <input
          onChange={(e) => handle(e)}
          id="kidBirthDate"
          value={data.kidBirthDate}
          placeholder="12.08.2015"
          type="data"
        />
        <br />
        <label /> Домашня адреса:
        <input
          onChange={(e) => handle(e)}
          id="kidAddress"
          value={data.kidAddress}
          placeholder="м. Чернівці, вул. Полетаева, буд. 6, кв. 8 "
          type="address"
        />
        <br />
        <label /> Код дитини:
        <input
          onChange={(e) => handle(e)}
          id="kidIdNumber"
          value={data.kidIdNumber}
      
          placeholder="0014565"
          type="Number"
        />
        <br />
        <label /> Група:
        <input
          onChange={(e) => handle(e)}
          id="nameGroup"
          value={data.nameGroup}
          placeholder="молодша 3"
          type="text"
        />
        <br />
        <label /> Наявність пільг:
        <input
          onChange={(e) => handle(e)}
          id="privileges"
          value={data.privileges}
          placeholder="немае"
          type="text"
        />
        <br />
        <p>
          <u>Батько </u>
        </p>
        <label /> Прізвище:
        <input
          onChange={(e) => handle(e)}
          id="userParentOne.surname"
          value={data.userParentOne_surname}
          placeholder="Бондарюк"
          type="text"
        />{" "}
        <br />
        <label />
        Ім’я:
        <input
          onChange={(e) => handle(e)}
          id="userParentOne_name"
          value={data.userParentOne_name}
          placeholder="Степан"
          type="text"
        />{" "}
        <br />
        <label>По-батькові: </label>
        <input
          onChange={(e) => handle(e)}
          id="userParentOne.fatherName"
          value={data.userParentOne_fatherName}
          placeholder="Володимирович"
          type="text"
        />{" "}
        <br />
        <label />
        Дата народження:
        <input
          onChange={(e) => handle(e)}
          id="userParentOne.birthDate"
          value={data.userParentOne_birthDate}
          placeholder="15.10.1988"
          type="data"
        />
        <br />
        <label />
        Номер телефону:
        <input
          onChange={(e) => handle(e)}
          id="userParentOne.phone"
          value={data.userParentOne_phone}
          placeholder="095 122 88 14"
          type="tel"
        />{" "}
        <br />
        <p>
          <u> Мати </u>
        </p>
        <label /> Прізвище:
        <input
          onChange={(e) => handle(e)}
          id="userParentTwo.surname"
          value={data.userParentTwo_surname}
          placeholder="Бондарюк"
          type="text"
        />
        <br />
        <label>Ім’я:</label>
        <input
          onChange={(e) => handle(e)}
          id="userParentTwo.name"
          value={data.userParentTwo_name}
          placeholder="Оксана"
          type="text"
        />
        <br />
        <label />
        По-батькові:
        <input
          onChange={(e) => handle(e)}
          id="userParentTwo.fatherName"
          value={data.userParentTwo_fatherName}
          placeholder="Олександрівна"
          type="text"
        />
        <br />
        <label />
        Дата народження:
        <input
          onChange={(e) => handle(e)}
          id="userParentTwo.birthDate"
          value={data.userParentTwo_birthDate}
          placeholder="15.10.1988"
          type="data"
        />
        <br />
        <label />
        Номер телефону:
        <input
          onChange={(e) => handle(e)}
          id="userParentTwo.phone"
          value={data.userParentTwo_phone}
          placeholder="095 122 88 12"
          type="tel"
        />
        <br />
        <input
          onChange={(e) => handle(e)}
          id="userParentTwo.phone"
          value={data.userParentTwo_phone}
          placeholder="095 122 88 12"
          type="tel"
        />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
