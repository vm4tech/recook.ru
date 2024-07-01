import React from "react";
import {Avatar, Badge, message, Space, MenuProps, Dropdown, Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {useLogout} from "../../hooks/useAuthorization";
import {useNavigate} from "react-router-dom";
const Test: React.FC = () => (
    <Space size={24}>
        <Badge count={1}>
            <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
    </Space>
);


const items: MenuProps['items'] = [
    {
        label: 'logout',
        key: '1'
    },

];


export const ProfileButton: React.FC = ()  => {
    const { mutateAsync, isLoading} = useLogout()
    const navigate = useNavigate()
    const handleMenuClick: MenuProps['onClick'] = async (e) => {
        console.log('click', e);
        await mutateAsync(undefined, undefined).then(
            () => {
                message.success('Вы успешно вышли, перенаправление');
                navigate(`/`);
            }
        )

    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    return (
        <Dropdown.Button
            icon={<Test />}
            menu={menuProps}
        >
            Submit
        </Dropdown.Button>

    )
}