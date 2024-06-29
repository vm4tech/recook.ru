import React from "react";
import {Avatar, Badge, message, Space, MenuProps, Dropdown, Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
const Test: React.FC = () => (
    <Space size={24}>
        <Badge count={1}>
            <Avatar icon={<UserOutlined />} />
        </Badge>
    </Space>
);


const items: MenuProps['items'] = [
    {
        label: 'logout',
        key: '1'
    },

];

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};
const menuProps = {
    items,
    onClick: handleMenuClick,
};

export const ProfileButton: React.FC = ()  => {
    return (
    <Dropdown menu={menuProps} >
        <Button>
            <Space>
                Button
                <Test />
            </Space>
        </Button>
    </Dropdown>
    )
}