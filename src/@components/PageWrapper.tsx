import { ENV } from '.environments';
import { ImagePaths } from '@lib/constant';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

export interface ISchema {
  key: string;
  type: 'application/ld+json';
  dataSchema?: string;
  content: Object;
}

interface IMeta {
  title?: string;
  baseTitle?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  url?: string;
  keywords?: string;
  articlePublishedTime?: string;
  articleAuthor?: string;
  schemas?: ISchema[];
}

interface IProps extends IMeta {
  children: React.ReactNode;
}

const PageWrapper: React.FC<IProps> = ({ children, ...customMeta }) => {
  const router = useRouter();

  const asPath = router.asPath?.split('?')[0];
  const ogImageUrl = `${ENV.appHostUrl}${ImagePaths.logo}`;

  const meta: IMeta = {
    title: '',
    baseTitle: 'UMS',
    description: ``,
    image: ogImageUrl,
    url: `${ENV.appHostUrl}${router.locale ? '/' + router.locale : ''}${asPath}`,
    type: 'website',
    keywords: '',
    ...customMeta,
  };

  const generatedTitle = `${meta.title ? meta.title + ' - ' : ''}${meta.baseTitle}`;

  return (
    <React.Fragment>
      <Head>
        <title>{generatedTitle}</title>
        <link rel="canonical" href={meta.url} />

        {meta.description && <meta name="description" content={meta.description} />}
        {meta.keywords && <meta name="keywords" content={meta.keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="alternate" hrefLang="x-default" href={`${ENV.appHostUrl}${asPath}`} />
        <link rel="alternate" hrefLang="en-BD" href={`${ENV.appHostUrl}${asPath}`} />

        <meta property="og:site_name" content="Visa Permit" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={generatedTitle} />
        <meta property="og:image" content={meta.image} />
        {meta.description && <meta property="og:description" content={meta.description} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content={`${ENV.appHostUrl}/`} />
        <meta property="twitter:url" content={meta.url} />
        <meta name="twitter:title" content={generatedTitle} />
        <meta name="twitter:image" content={meta.image} />
        {meta.description && <meta name="twitter:description" content={meta.description} />}

        {meta.type === 'article' && meta.articleAuthor && (
          <meta property="article:author" content={meta.articleAuthor} />
        )}
        {meta.type === 'article' && meta.articlePublishedTime && (
          <meta property="article:published_time" content={meta.articlePublishedTime} />
        )}

        {meta?.schemas?.map((item) => (
          <script
            key={item?.key}
            type={item?.type}
            data-schema={item?.dataSchema}
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item?.content) }}
          />
        ))}
      </Head>
      {children}
    </React.Fragment>
  );
};

export default PageWrapper;
