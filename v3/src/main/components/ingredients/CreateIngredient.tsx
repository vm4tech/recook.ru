import React, {useEffect, useState} from "react";
import {Button, Divider, Flex, Form, Input, message, Modal, Upload, UploadFile} from "antd";
import {RcFile, UploadProps} from "antd/es/upload";
import {delay, getBase64} from "../../utils/utils";
import {BASE_PADDING} from "../../utils/Contants";
import {useCreateIngredient} from "../../../hooks/useIngredient";
import {IngredientCreateRequest} from "../../../types/IngredientApi";

export const CreateIngredient: React.FC = () => {
    const [form] = Form.useForm();
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const [fileList, setFileList] = useState<UploadFile[]>([])
    const {mutateAsync, isLoading, isSuccess} = useCreateIngredient()
    const onFinish = async () => {
        console.log("Success: ", form.getFieldsValue());
        // TODO: refactor names (to consts)
        let base64Img = await getBase64(form.getFieldValue("base64Img")[0].originFileObj as RcFile)
        form.setFieldValue("base64Img", base64Img)
        let body = form.getFieldsValue() as unknown as IngredientCreateRequest
        console.log("to Send: ", body)
        mutateAsync(body).then(() => {
            message.success(`Ингредиент ${form.getFieldValue("name")} успешно создан!`);
            delay(2000)
        })

    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(
            file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
        );
    };
    const normFile = (e: any) => {
        console.log("normFile", e)
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const handleChange: UploadProps["onChange"] = ({fileList: newFileList}) =>
        setFileList(newFileList);

    return (
        <Flex style={BASE_PADDING} vertical justify={"center"} align={"center"}>
            <Divider> Создание ингредиента </Divider>
            <Form
                form={form}
                name={"createIng"}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Flex justify={"center"}>
                    <Form.Item name="base64Img" required label={"Фото"} getValueFromEvent={normFile}>
                        {/*<ImgCrop rotationSlider>*/}
                        <Upload
                            fileList={fileList}
                            listType="picture-card"
                            onPreview={handlePreview}
                            onChange={handleChange}
                        >
                            {fileList.length >= 1 ? null : "Загрузить фото"}
                        </Upload>
                        {/*</ImgCrop>*/}
                    </Form.Item>
                </Flex>
                <Form.Item initialValue={"Тест"} name={"name"} label="Название" required>
                    <Input/>
                </Form.Item>
                <Form.Item name={"description"} label="Описание">
                    <Input.TextArea/>
                </Form.Item>

                <Form.Item initialValue={"100.0"} name={"count"} required
                           label="Количество меры ингредиента (например 100грамм)">
                    <Input/>
                </Form.Item>
                <Form.Item initialValue={"MILK"} name={"type"} required label="Тип ингредиента (молочка, овощь)">
                    <Input/>
                </Form.Item>
                <Form.Item initialValue={"KG"} name={"measure"} required
                           label="Мера ингредиента (граммы, миллиграммы, кг)">
                    <Input/>
                </Form.Item>
                <Flex justify={"center"} align={"center"}>
                    <Form.Item>
                        <Button loading={isLoading} htmlType="submit" type="primary">Сохранить</Button>
                    </Form.Item>
                </Flex>
            </Form>
            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{width: "100%"}} src={previewImage}/>
            </Modal>
        </Flex>
    )
}

