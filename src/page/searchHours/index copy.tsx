import { Button, DatePicker, Select, Space, Form } from "antd";
import { Box, BoxSelect, Container } from "./style";
import TextArea from "antd/es/input/TextArea";
import { options } from "../../utils/optionSelect";
import { Option } from "antd/es/mentions";

export default function SearchHours() {

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    return (
        <Container>
            <Box>
                <h1>Buscar Horas</h1>
                <h3>Informe Nome(s)</h3>
                <TextArea rows={10} />
                <h3>Escolha a data para a busca</h3>
                    <DatePicker  onChange={onChange} placeholder="Data Inicial" />
                    <DatePicker onChange={onChange} placeholder="Data Final" />
                <h3>Selecione um guarnição</h3>
                <Select
                    showSearch
                    placeholder="Selecione uma opção"
                    optionFilterProp="label"
                    onChange={onChange}
                    onSearch={onSearch}
                >
                    {options.map((option) => (
                        <Option key={option.value} value={option.value}>
                            <BoxSelect>
                                {option.icon && <span>{option.icon}</span>}
                                <span>{option.label}</span>
                            </BoxSelect>
                        </Option>
                    ))}
                </Select>
                <Button type="primary">Buscar</Button>
            </Box>
        </Container>
    );
}
