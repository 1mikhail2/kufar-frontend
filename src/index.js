import React from "react";
import ReactDOM from "react-dom/client";
import СategoriesButton from "./components/buttons/categories-button/СategoriesButton";
import LoginButton from "./components/buttons/login-button/LoginButton";
import GoButton from "./components/buttons/go-button/GoButton";
import RegionLabelButton from "./components/buttons/regionLabel-button/RegionLabelButton";
import SubmitButton from "./components/buttons/submit-button/SubmitButton";
import NextButton from "./components/buttons/next-button/NextButton";

import "./main.css";

import nedviga from "./assets/images/nedviga.svg";
import car from "./assets/images/car.svg";
import build from "./assets/images/build.svg";
import sport from "./assets/images/sport.svg";
import babies from "./assets/images/babies.svg";
import furniture from "./assets/images/furniture.svg";
import fashion from "./assets/images/fashion.svg";
import pets from "./assets/images/pets.svg";
import chair from "./assets/images/chair.svg";
import phones from "./assets/images/phones.svg";
import garden from "./assets/images/garden.svg";
import electro from "./assets/images/electro.svg";
import tech from "./assets/images/tech.svg";
import washer from "./assets/images/washer.svg";
import manfashion from "./assets/images/manfashion.svg";
import services from "./assets/images/services.svg";
import business from "./assets/images/business.svg";
import beauty from "./assets/images/beauty.svg";
import job from "./assets/images/job.svg";
import holiday from "./assets/images/holiday.svg";
import other from "./assets/images/other.svg";

import regionLabel from "./assets/images/regionLabel.png";

import plus from "./assets/images/plus.svg";

import leftarrow from "./assets/images/left-black.svg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="categories">
    <СategoriesButton caption="Недвижимость">
      <img src={nedviga} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Авто и запчасти">
      <img src={car} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Ремонт и стройка">
      <img src={build} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Хобби, спорт и туризм">
      <img src={sport} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Все для детей и мам">
      <img src={babies} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Мебель">
      <img src={furniture} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Женский гардероб">
      <img src={fashion} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Животные">
      <img src={pets} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Все для дома">
      <img src={chair} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Телефоны и планшеты">
      <img src={phones} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Сад и огород">
      <img src={garden} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Электроника">
      <img src={electro} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Компьютерная техника">
      <img src={tech} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Бытовая техника">
      <img src={washer} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Мужской гардероб">
      <img src={manfashion} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Услуги">
      <img src={services} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Готовый бизнес и оборудование">
      <img src={business} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Красота и здоровье">
      <img src={beauty} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Работа">
      <img src={job} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Свадьба и праздники">
      <img src={holiday} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>
    <СategoriesButton caption="Прочее">
      <img src={other} alt="none" width={18} height={18}></img>{" "}
    </СategoriesButton>

    <LoginButton caption="Войти" />

    <GoButton caption="Перейти" />

    <RegionLabelButton caption="Регион">
      <img src={regionLabel} alt="none" width={15} height={17}></img>
    </RegionLabelButton>

    <SubmitButton caption="Подать обьявление">
      <img src={plus} alt="none" width={16} height={16}></img>
    </SubmitButton>

    <NextButton>
      <img src={leftarrow} alt="none" width={22} height={22}></img>
    </NextButton>
  </div>
);
