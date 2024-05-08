import { debounceFn } from '@lib/utils';
import { Form, FormInstance } from 'antd';
import { useEffect } from 'react';

interface IProps {
  initialValues?: { [key: string]: string | number };
  onChange?: (values) => void;
  children?: React.ReactNode;
  form?: FormInstance;
}
const BaseFilter = ({ initialValues, children, onChange, form }: IProps) => {
  const [formInstance] = Form.useForm();

  useEffect(() => {
    form ? form.resetFields() : formInstance?.resetFields();
  }, [formInstance, initialValues, form]);

  return (
    <div className="justify-end hidden gap-2 md:flex">
      <Form
        form={form ?? formInstance}
        onValuesChange={debounceFn((current, values) => onChange(values), 500)}
        className="flex gap-2"
        initialValues={initialValues}
      >
        {/* <Form.Item name="sortOrder">
          <Select style={{ width: 130 }} allowClear virtual={false} placeholder="Sort By Date">
            <Select.Option title="Newest" value="DESC">
              Newest
            </Select.Option>
            <Select.Option title="Oldest" value="ASC">
              Oldest
            </Select.Option>
          </Select>
        </Form.Item> */}
        {children}
      </Form>
    </div>
  );
};

export default BaseFilter;
