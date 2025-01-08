'use client';

import { usePreRegistrationAddDrop } from '@apis/pre-registration/hooks';
import { IPreregistration } from '@apis/pre-registration/interfaces';
import { message, PaginationProps, Switch, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

interface IProps {
  data?: IPreregistration['offeredSectionList'];
  preregisteredSectionList?: IPreregistration['preregisteredSectionList'];
  semesterNumber?: number;
  loading: boolean;
  pagination?: PaginationProps;
  refetchData?: () => void;
}
const PreRegistrationList: React.FC<IProps> = ({
  data,
  loading,
  pagination,
  preregisteredSectionList,
  semesterNumber,
  refetchData,
}) => {
  const [messageApi, messageCtx] = message.useMessage();

  const preRegistrationAddDropFn = usePreRegistrationAddDrop({
    config: {
      onSuccess(res) {
        if (res?.status !== 'success') {
          messageApi.error('something went wrong.');
          return;
        }
        messageApi[res?.data?.status](res?.data?.message);
        refetchData();
      },
    },
  });

  // VisaFee table data source config
  const dataSource = data?.map((x) => ({
    ...x,
    courseCode: x?.course?.code,
    courseTitle: x?.course?.title,
    credits: x?.credits,
    interestedStudentCount: x?.interestedStudentCount,
    isSelected: !!preregisteredSectionList?.find((item) => item?.course?.code == x?.course?.code),
  }));

  const columns: ColumnsType<(typeof dataSource)[number]> = [
    {
      title: 'Selected',
      dataIndex: 'isSelected',
      key: 'isSelected',
      render(isSelected, record) {
        return (
          <div className="flex gap-2 prose">
            <Switch
              className="bg-gray-400"
              checked={isSelected}
              onChange={(checked) => {
                preRegistrationAddDropFn.mutate({
                  semesterNumber: semesterNumber,
                  data: {
                    ...record,
                    selected: checked,
                  },
                });
              }}
            />
          </div>
        );
      },
    },
    {
      title: 'Course Code',
      dataIndex: 'courseCode',
      key: 'courseCode',
    },
    {
      title: 'Course Title',
      dataIndex: 'courseTitle',
      key: 'courseTitle',
    },
    {
      title: 'Credits',
      dataIndex: 'credits',
      key: 'credits',
    },
    {
      title: 'Interested Student',
      dataIndex: 'interestedStudentCount',
      key: 'interestedStudentCount',
    },
  ];
  // VisaFee table data source config end

  return (
    <React.Fragment>
      {messageCtx}

      <Table loading={loading} columns={columns} dataSource={dataSource} pagination={pagination} />
    </React.Fragment>
  );
};

export default PreRegistrationList;
