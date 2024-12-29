import { useState } from "react";
import { Button, DatePicker, Select, FormProps, Form, Alert, Spin } from "antd";
import { Box, BoxSelect, Container, FormItemLabel, Watermark, Footer } from "./style";
import TextArea from "antd/es/input/TextArea";
import { options } from "../../utils/optionSelect";
import { Option } from "antd/es/mentions";
import { processarConsulta } from "../../services/backendLogic";
import dayjs from "dayjs";
import { formatarResultado } from "../../utils/resultUtils";

const { RangePicker } = DatePicker;

export default function SearchHours() {
    const [result, setResult] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState<'success' | 'error'>('success');
    const [alertDescription, setAlertDescription] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    type FieldType = {
        usuarios?: string;
        dateRange?: [string | null, string | null];
        guarnicao?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        setLoading(true);
        try {
            const usuarios = values.usuarios?.split('\n') || [];
            const guarnicao = values.guarnicao || "";
            const [data_inicial, data_final] = values.dateRange || [];

            const formattedData = {
                usuarios,
                data_inicial: data_inicial ? dayjs(data_inicial).format('YYYY-MM-DD') : undefined,
                data_final: data_final ? dayjs(data_final).format('YYYY-MM-DD') : undefined,
                guarnicao,
            };

            // Chama a lógica do backend e obtém o resultado
            const result = await processarConsulta(formattedData);

            // Formata os dados
            const resultFormated = await formatarResultado(result);

            // Atualiza o estado com o resultado
            setResult(JSON.stringify(resultFormated, null, 2));
            setIsVisible(true); // Torna o textarea visível
            setAlertMessage('Sucesso na Busca');
            setAlertType('success');
            setAlertDescription('A busca foi concluída com sucesso.');

            // Faz o alerta desaparecer após 5 segundos
            setTimeout(() => {
                setAlertMessage('');
            }, 5000);
        } catch (error) {
            if (error instanceof Error) {
                const errorMessage = error.message || 'Algo deu errado';
                setAlertDescription(errorMessage);
            } else {
                setAlertDescription('Erro desconhecido');
            }
            setAlertType('error');
            setAlertMessage('Falha na busca.');

            // Faz o alerta desaparecer após 5 segundos
            setTimeout(() => {
                setAlertMessage('');
            }, 5000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Box>
                <h1>Buscar Horas</h1>
                <Form
                    autoComplete="off"
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item label={<FormItemLabel>Informe Nome(s)</FormItemLabel>} name="usuarios">
                        <TextArea rows={10} disabled={loading} />
                    </Form.Item>

                    <Form.Item label={<FormItemLabel>Escolha o intervalo de datas</FormItemLabel>} name="dateRange">
                        <RangePicker disabled={loading} />
                    </Form.Item>

                    <Form.Item label={<FormItemLabel>Escolha uma guarnição</FormItemLabel>} name="guarnicao">
                        <Select showSearch placeholder="Selecione uma opção" optionFilterProp="label" disabled={loading}>
                            {options.map((option) => (
                                <Option key={option.value} value={option.value}>
                                    <BoxSelect>
                                        {option.icon && <span>{option.icon}</span>}
                                        <span>{option.label}</span>
                                    </BoxSelect>
                                </Option>
                            ))}
                        </Select>

                    </Form.Item>

                    <Form.Item label={null}>
                        <Button block type="primary" htmlType="submit" disabled={loading}>Buscar</Button>
                    </Form.Item>
                </Form>

                {isVisible && (
                    <Form layout="vertical">
                        <Form.Item label="Resultado da Busca">
                            <TextArea rows={15} value={result || ''} readOnly disabled={loading}
                                style={{ whiteSpace: 'pre-wrap' }} />
                        </Form.Item>
                    </Form>
                )}

                {/* Exibindo o Alert condicionalmente */}
                {alertMessage && (
                    <Alert
                        message={alertMessage}
                        description={alertDescription}
                        type={alertType}
                        showIcon
                        closable
                        onClose={() => setAlertMessage('')} // Fecha o alerta manualmente
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            zIndex: 1000,
                        }}
                    />
                )}

                {loading && (
                    <Spin tip="Loading" size="large"
                        style={{
                            position: 'fixed',
                            top: '40%',
                            left: '50%',
                            zIndex: 1000,
                        }}
                    />
                )}
            </Box>
            <Footer>
                <Watermark>@Desenvolvido por Eriky Love e Veio TioPaulo</Watermark>
            </Footer>
        </Container>
    );
}
