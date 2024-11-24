import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './bookshelf.module.css';

export default function Bookshelf() {
  const books = [
    {
      title: '其实并不是规范的爱情',
      cover: '/Eiche/img/novel1-cover.jpg',
      link: '/docs/novel1/intro',
    },
    {
      title: '遇匪',
      cover: '/Eiche/img/novel2-cover.jpg',
      link: '/docs/novel2/intro',
    },
  ];

  return (
    <Layout title="书架">
      <div className={styles.bookshelfContainer}>
        <h1 className={styles.pageTitle}>我的书架</h1>
        <div className={styles.bookGrid}>
          {books.map((book, idx) => (
            <div key={idx} className={styles.bookCard}>
              <Link to={book.link} className={styles.bookLink}>
                <div className={styles.coverWrapper}>
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className={styles.bookCover}
                    onError={(e) => {
                      console.error(`图片加载失败: ${book.cover}`);
                      e.target.src = '/Eiche/img/default-cover.jpg';
                    }}
                    onLoad={() => {
                      console.log(`图片加载成功: ${book.cover}`);
                    }}
                  />
                </div>
                <h2 className={styles.bookTitle}>{book.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 