import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './bookshelf.module.css';

export default function Bookshelf() {
  const books = [
    {
      title: '第一本小说',
      description: '这里是第一本小说的简介...',
      cover: '/img/novel1-cover.jpg', // 你需要在 static/img 目录下添加封面图片
      link: '/docs/novel1/chapter1',
    },
    {
      title: '第二本小说',
      description: '这里是第二本小说的简介...',
      cover: '/img/novel2-cover.jpg',
      link: '/docs/novel2/chapter1',
    },
  ];

  return (
    <Layout title="书架">
      <div className={styles.bookshelfContainer}>
        <h1>我的书架</h1>
        <div className={styles.bookGrid}>
          {books.map((book, idx) => (
            <div key={idx} className={styles.bookCard}>
              <Link to={book.link} className={styles.bookLink}>
                <img src={book.cover} alt={book.title} className={styles.bookCover} />
                <h2>{book.title}</h2>
                <p>{book.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 