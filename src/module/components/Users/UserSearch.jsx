import React, { PropTypes } from 'react';
import { Form, Input, Button, Select } from 'antd';
import './UserSearch.less';

const UserSearch = ({
  field, keyword,
  onSearch,
  onAdd,
  form: {
    getFieldProps,
    validateFields,
    getFieldsValue,
    },
  }) => {
  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return;
      }
      onSearch(getFieldsValue());
    });
  }

  return (
    <div className='user-normal'>
      <div className='user-search'>
        <Form inline onSubmit={handleSubmit}>
          <Form.Item>
              <Select {...getFieldProps('field', { initialValue: field || 'name'})} >
                <Select.Option value="name">名字</Select.Option>
                <Select.Option value="address">地址</Select.Option>
              </Select>
          </Form.Item>
          <Form.Item
            hasFeedback
          >
              <Input type="text" {...getFieldProps('keyword', { initialValue: keyword || ''})} />
          </Form.Item>
          <Button style={{ marginRight: '10px' }} type="primary" htmlType="submit">搜索</Button>
        </Form>
      </div>
      <div className='user-create'>
        <Button type="ghost" onClick={onAdd}>添加</Button>
      </div>
    </div>
  );
};

UserSearch.propTypes = {
  form: PropTypes.object.isRequired,
  onSearch: PropTypes.func,
  onAdd: PropTypes.func,
  field: PropTypes.string,
  keyword: PropTypes.string,
};

export default Form.create()(UserSearch);
