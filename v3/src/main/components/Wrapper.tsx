import React from "react";
import {Col, Row} from "antd";

/**
 * Обертка для отображения информации посередине в контейнере
 **/
export const Wrapper: React.FC<React.PropsWithChildren> = (props) =>
    <Row justify="center">
        <Col xl={16}
             lg={18}
             md={20}
             sm={22}
             xs={24}
             style={{padding: 20}}
        >
            {props.children}
        </Col>
    </Row>