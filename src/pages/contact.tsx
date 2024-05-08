import BannerSection from '@components/BannerSection';
import PageWrapper from '@components/PageWrapper';
import { ImagePaths } from '@lib/constant';

const ContactPage = () => {
  return (
    <PageWrapper title="Contact Us">
      <BannerSection
        breadcrumb={[
          {
            name: 'home',
            slug: `/`,
          },
        ]}
        title="Contact Page"
        isDescriptionRichText
        description="As a Stock Associate, you will support the back-of-house by packing/unpacking shipments, organizing the stock room, understanding & executing on core operational policies & procedures, telephone answering and anything else required ."
        thumbSrc={ImagePaths.placeHolder}
      />
      <div className="container flex items-center justify-center h-screen mx-auto">
        <h1 className="text-xl font-bold">Contact page</h1>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
