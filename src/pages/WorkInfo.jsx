import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";

const WorkInfo = () => {
  const { state: studentWorkInfo } = useLocation();

  return (
    <div className="work-info">
      <div className="container">
        <h1 className="title">{studentWorkInfo.studentFio}</h1>
        <table>
          <tbody>
            <tr>
              <td><strong>Филиал</strong></td>
              <td>{studentWorkInfo.filialName}</td>
            </tr>
            <tr>
              <td><strong>Факультет</strong></td>
              <td>{studentWorkInfo.facultyName}</td>
            </tr>
            <tr>
              <td>ФИО студента</td>
              <td>{studentWorkInfo.studentFio}</td>
            </tr>
            <tr>
              <td>Название работы</td>
              <td>{studentWorkInfo.title}</td>
            </tr>
            <tr>
              <td>ФИО научного руководителя</td>
              <td>{studentWorkInfo.studentFio}</td>
            </tr>
          </tbody>
        </table>
        Файлы этого ресурса:
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Размер</th>
              <th>Формат</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Тут_будет_название.pdf</td>
              <td>1.5 МБ</td>
              <td>PDF</td>
              <td>
                <Button>Просмотреть/Открыть</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkInfo;
