import React, { Component } from 'react';
import { connect } from 'dva';
import { Form } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

@connect(({ rule, loading }) => ({
  rule,
  loading: loading.models.rule,
}))
@Form.create()
class UserInfoList extends Component {
  render() {
    return <PageHeaderLayout>99999</PageHeaderLayout>;
  }
}

export default UserInfoList;
