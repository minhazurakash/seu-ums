import PageWrapper from '@components/PageWrapper';
import { Button, Col, Row } from 'antd';
import Link from 'next/link';

export default function Custom404() {
  return (
    <PageWrapper title="404" description={null}>
      <section className="error-area">
        <div className="container">
          <Row justify={'center'}>
            <Col lg={12}>
              <div className="text-center error-content">Not Found</div>
            </Col>
            <Col lg={18}>
              <div className="flex justify-center">
                <img
                  src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg"
                  alt=""
                />
              </div>
            </Col>
            <Col lg={24}>
              <Link href="/" className="flex justify-center my-[30px]">
                <Button className="bg-[var(--primaryColor)]">Back to Home Page</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </section>
    </PageWrapper>
  );
}
