import React, {useEffect, useState} from "react";

import CodeMirror from '@uiw/react-codemirror';
import {javascript} from '@codemirror/lang-javascript';
import {Divider, Button, Col, Row, notification} from "antd";

import {useParams, useLocation} from "react-router-dom";
import {useAppSelector, useAppDispatch} from "store/store.hooks";
import {completeTask} from "store/actions/tasks.actions";

import checkSolution, {SolutionResult} from "core/checkSolution";

type NotificationType = 'success' | 'error';

const showNotification = (type: NotificationType, message: string, description: string) => {
    notification[type]({
        message,
        description,
        placement: "bottomRight"
    });
};

function Task() {
    const location = useLocation()
    const params = useParams();
    const taskId: number = parseInt(params.id!);

    const task = useAppSelector(state => state.tasks.find(task => task.id === taskId))!
    const dispatch = useAppDispatch();

    const [codeValue, setCodeValue] = useState("");

    const handleCheck = () => {
        const solution: SolutionResult = checkSolution(task, codeValue);

        if (solution.status) {
            showNotification("success", "Успішно!", solution.message);
            dispatch(completeTask(taskId));
        } else {
            showNotification("error", "Сталася помилка!", solution.message);
        }
    }

    useEffect(() => {
        setCodeValue("");
    }, [location])

    return (
        <div className="task">
            <Row style={{height: "100%"}}>
                <Col span={8}>
                    <div className={`task__status ${task.completed ? 'task__status--completed' : ''}`}>
                        {task.completed ? "Виконано" : "Не виконано"}
                    </div>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                </Col>
                <Col span={1}>
                    <Divider type="vertical" style={{height: "100%"}}/>
                </Col>
                <Col span={15}>
                    <CodeMirror
                        height="80vh"
                        extensions={[javascript()]}
                        value={codeValue}
                        onChange={(value) => setCodeValue(value)}
                    />
                    <Button type="primary" style={{marginTop: 25}} onClick={handleCheck}>Відправити рішення</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Task;