import BannerSection from '@components/BannerSection';
import PageWrapper from '@components/PageWrapper';
import { ImagePaths } from '@lib/constant';
import React from 'react';

const index = () => {
  return (
    <PageWrapper title="Home">
      <BannerSection
        breadcrumb={[
          {
            name: 'home',
            slug: `/`,
          },
          {
            name: 'contact Us',
            slug: '/contact',
          },
        ]}
        title="Home page"
        isDescriptionRichText
        description="As a Stock Associate, you will support the back-of-house by packing/unpacking shipments, organizing the stock room, understanding & executing on core operational policies & procedures, telephone answering and anything else required ."
        thumbSrc={ImagePaths.placeHolder}
      />
      <div className="container flex items-center justify-center h-screen mx-auto">
        <h1 className="text-xl font-bold">Home page</h1>
      </div>
    </PageWrapper>
  );
};

export default index;
