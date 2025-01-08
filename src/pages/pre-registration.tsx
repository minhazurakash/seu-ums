import { PageHeader } from '@ant-design/pro-layout';
import { usePreRegistrations } from '@apis/pre-registration/hooks';
import PageWrapper from '@components/PageWrapper';
import PreRegistrationList from '@components/pre-registration/PreRegistrationList';
import { IBaseFilter } from '@lib/interfaces';
import { Input, Tag } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';

const PreRegistrationPage = () => {
  const router = useRouter();
  const { page = 1, limit = 200 }: IBaseFilter = router?.query;

  const [searchTerm, setSearchTerm] = useState<string>('');

  // ApplicationStages query functionalities
  const { isLoading, data, refetch } = usePreRegistrations({});

  const filteredData = data?.data?.offeredSectionList?.filter(
    (item) =>
      item?.course?.code?.toLocaleLowerCase()?.includes(searchTerm?.toLocaleLowerCase()) ||
      item?.course?.title?.toLocaleLowerCase()?.includes(searchTerm?.toLocaleLowerCase()),
  );
  console.log(filteredData);

  return (
    <PageWrapper title="UMS">
      <div className="container mx-auto">
        <PageHeader title="Pre-Registration Subject list" tags={<Tag>Total items: {filteredData?.length}</Tag>} />
        <div className="w-96">
          <Input
            className="w-72"
            placeholder="search by code or title"
            onChange={(e) => setSearchTerm(e?.target?.value)}
          />
        </div>
        <PreRegistrationList
          loading={isLoading}
          data={filteredData}
          preregisteredSectionList={data?.data?.preregisteredSectionList}
          semesterNumber={data?.data?.semester?.semesterNumber}
          refetchData={() => refetch()}
          pagination={{
            total: data?.meta?.total,
            current: Number(page),
            pageSize: Number(limit),
            // onChange: (page, limit) =>
            //   router.push({
            //     query: $$.toCleanObject({ ...router.query, page, limit }),
            //   }),
          }}
        />
      </div>
    </PageWrapper>
  );
};

export default PreRegistrationPage;
