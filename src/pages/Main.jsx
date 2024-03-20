import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Link } from "react-router-dom";

const Main = () => {
  const [works, setWorks] = useState([
    {
      id: 1,
      year: 2023,
      title: "Разработка поисковой системы хранения и обработки студенческих работ",
      studentFio: "Магомедов Магомед Магомедович",
      filialName: "Махачкала",
      facultyName: "Математики и компьютерных наук"
    },
    {
      id: 2,
      year: 2022,
      title: "Разработка поисковой системы хранения и обработки студенческих работ",
      studentFio: "Магомедов Магомед Магомедович",
      filialName: "Махачкала",
      facultyName: "Математики и компьютерных наук"
    },
    {
      id: 3,
      year: 2024,
      title: "Разработка поисковой системы хранения и обработки студенческих работ",
      studentFio: "Магомедов Магомед Магомедович",
      filialName: "Махачкала",
      facultyName: "Математики и компьютерных наук"
    },
    {
      id: 4,
      year: 2023,
      title: "Разработка поисковой системы хранения и обработки студенческих работ",
      studentFio: "Магомедов Магомед Магомедович",
      filialName: "Махачкала",
      facultyName: "Математики и компьютерных наук"
    }
  ])
  return (
    <div className="main">
      <div className="main__container container">
        <h1 className="main__title title">Репозитории студенческих работ</h1>
        <div className="main__search search">
          <div className="search__form form">
            <label className="form__label">
              <span className="form__text">Название работы</span>
              <Input
                className="form__input"
                placeholder="Введите название работы"
              />
            </label>
            <label className="form__label">
              <span className="form__text">Год(ы)</span>
              <Input
                className="form__input form__input--small"
                placeholder="Введите год или период через дефис"
              />
            </label>
            <label className="form__label">
              <span className="form__text">Студент</span>
              <Input
                className="form__input form__input--small"
                placeholder="Введите ФИО студента"
              />
            </label>
            <label className="form__label">
              <span className="form__text">Научный руководитель</span>
              <Input
                className="form__input form__input--small"
                placeholder="Введите ФИО научного руководителя"
              />
            </label>
            <div className="form__actions">
              <Button className="form__btn form__btn_search">Начать поиск</Button>
              <Button type="reset" className="btn_secondary form__btn_reset">Сбросить результаты поиска</Button>
            </div>
          </div>
        </div>
        <div className="main__search-result">
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Год</th>
                <th>Название работы</th>
                <th>Студент</th>
                <th>Филиал</th>
                <th>Факультет</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                works.map((work, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{work.year}</td>
                    <td>{work.title}</td>
                    <td>{work.studentFio}</td>
                    <td>{work.filialName}</td>
                    <td>{work.facultyName}</td>
                    <td>
                      <Link to="/work" state={work}>Подробнее</Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;
