/**
 *@desc
 *@author Richard Wang
 *@date 2022/4/26 15:42
 */
import React, {useState} from "react";
import "./getBirthdayAndGenderByIDNumber"
import {getAgeByIDNo, getBirthDayByIDNo, getGenderByIDNo} from "./getBirthdayAndGenderByIDNumber";

export const IDCardUtils = () => {
    const [inputValue,setInputValue] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string | false>('');
    const [gender,setGender] = useState<string | false>('');
    const [age,setAge] = useState<number | false>();

    const onChange = (e:React.ChangeEvent) => {
        setInputValue((e.target as HTMLInputElement).value);
    }

    const onClickHandler = () => {
        setBirthDate(getBirthDayByIDNo(inputValue));
        setGender(getGenderByIDNo(inputValue));
        setAge(getAgeByIDNo(inputValue));
    }

    return <div>
      <input type="text" placeholder={"输入身份证号"} onChange={onChange}/> <span><button onClick={onClickHandler}>获取生日</button></span>
      <p>生日：{birthDate}</p>
        <p>性别：{gender}</p>
        <p>年龄：{age}</p>
  </div>
}