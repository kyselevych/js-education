import React, {useCallback, useMemo} from "react";
import {Menu, MenuProps} from 'antd';
import {Link} from "react-router-dom";

import {useAppSelector} from "store/store.hooks";
import {CheckCircleOutlined} from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];

function Navigation() {
    const sections = useAppSelector(state => state.sections);
    const tasks = useAppSelector(state => state.tasks);

    const getMenuItems = useCallback(() => {
        return sections.map(section => {
            const tasksOfSection = tasks.filter(task => task.section.id === section.id);
            const children = tasksOfSection.map(task => (
                {
                    label: <Link to={'task/' + task.id}>{task.title}</Link>,
                    icon: task.completed ? <CheckCircleOutlined/> : <></>,
                    key: `task-${task.id}`
                }
            ))

            return {
                label: section.name, key: `section-${section.id}`, children: children
            };
        })
    }, [sections, tasks]);

    const items: MenuItem[] = useMemo(() => getMenuItems(), [getMenuItems]);

    return (
        <Menu mode="inline" items={items}/>
    );
}

export default Navigation;