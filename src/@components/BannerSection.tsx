import { ImagePaths } from '@lib/constant';
import { cn } from '@lib/utils';
import { Col, Row } from 'antd';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { VscHome } from 'react-icons/vsc';

interface IProps {
  className?: string;
  breadcrumb: {
    name: string;
    slug: string;
  }[];
  title: string;
  description?: ReactNode;
  thumbType?: 'horizontal' | 'vertical';
  thumbSrc?: string;
  buttonContent?: string;
  sectionId?: string;
  meta?: ReactNode;
  isDescriptionRichText?: boolean;
}

const BannerSection: React.FC<IProps> = ({
  className,
  breadcrumb,
  title,
  description,
  isDescriptionRichText = false,
  sectionId,
  thumbType = 'horizontal',
  thumbSrc,
}) => {
  if (!title && !description) {
    return;
  }

  return (
    <section id={sectionId} className={cn(className, 'banner_section')}>
      <div className="container">
        <div className="breadcrumb">
          {breadcrumb && (
            <ol>
              <li className="breadcrumb_link">
                <Link href="/bangladesh">
                  <VscHome size={24} />
                </Link>
              </li>
              {breadcrumb?.map((item, i) => {
                return (
                  <React.Fragment key={item?.name}>
                    <li className="breadcrumb_separator">
                      <IoIosArrowForward size={18} />
                    </li>
                    <li className={cn('breadcrumb_link', { active: breadcrumb?.length == i + 1 })}>
                      <Link href={item?.slug}>{item?.name}</Link>
                    </li>
                  </React.Fragment>
                );
              })}
            </ol>
          )}
        </div>
        <Row
          gutter={[
            { xs: 0, md: 20, xxl: 20 },
            { xs: 20, sm: 20, md: 20, lg: 0 },
          ]}
          // align="middle"
        >
          <Col xs={24} lg={16}>
            <div className="content_wrapper xl:pr-[142px]">
              <h1 className="title">{title}</h1>
              {description &&
                (isDescriptionRichText ? (
                  <div className="description" dangerouslySetInnerHTML={{ __html: description }}></div>
                ) : (
                  <p className="description">{description}</p>
                ))}
            </div>
          </Col>
          {thumbSrc ? (
            <Col xs={24} lg={8}>
              <div className={cn(thumbType === 'horizontal' ? 'aspect-video' : 'aspect-square', 'image_container')}>
                <img src={thumbSrc ?? ImagePaths.defaultImage} alt={title || 'banner thumb'} />
              </div>
            </Col>
          ) : null}
        </Row>
      </div>
    </section>
  );
};

export default BannerSection;
