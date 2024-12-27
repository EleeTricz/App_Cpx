import { FaHelicopter, FaMotorcycle } from "react-icons/fa";
import { GiPoliceCar, GiSkullWithSyringe, GiGriffinSymbol, GiClassicalKnowledge, GiTankTread } from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { MdOutlineMilitaryTech } from "react-icons/md";

export const options = [
    { value: '1', label: 'PMERJ', icon: <GiPoliceCar /> },
    { value: '2', label: 'BPM', icon: <FaMotorcycle /> },
    { value: '3', label: 'GAM', icon: <FaHelicopter /> },
    { value: '4', label: 'PATAMO', icon: <GiGriffinSymbol /> },
    { value: '6', label: 'BOPE', icon: <GiSkullWithSyringe /> },
    { value: '7', label: 'CHOQUE', icon: <AiFillThunderbolt /> },
    { value: '8', label: 'CURSOS', icon: <GiClassicalKnowledge /> },
    { value: '9', label: 'REUNIAO', icon: <IoPeopleSharp /> },
    { value: '10', label: 'INSTRUÇÃO', icon: <LiaChalkboardTeacherSolid /> },
    { value: '11', label: 'COMANDO', icon: <FaPersonMilitaryRifle /> },
    { value: '12', label: 'AGUARDNADO PTR', icon: <LuAlarmClock /> },
    { value: '14', label: 'INCURSÃO', icon: <GiTankTread /> },
    { value: '21', label: 'COE', icon: <MdOutlineMilitaryTech /> },
];