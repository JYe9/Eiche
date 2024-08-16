import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

// const FeatureList = [
//   {
//     title: <Translate>'精选故事与深刻思考'</Translate>,
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <Translate>
//         在 Eiche的小书架，每个故事都是一扇通往不同世界的大门。无论是充满巧合与误会的浪漫喜剧，
//         还是发人深省的生活哲思，你总能找到一段文字，带你逃离日常的平凡，沉浸于丰富的情感体验。
//         我们精选了不同类型的故事，以满足你多样的阅读需求。
//       </Translate>
//     ),
//   },
//   {
//     title: <Translate>'作家的灵感与创作'</Translate>,
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <Translate>
//         探索创作背后的故事。Eiche的小书架 不仅展示了完整的小说，还分享了作者的灵感来源、写作心得与创作历程。
//         了解文字背后的世界，感受作者与角色之间的微妙关系，或许能让你对这些故事有更深的理解和共鸣。
//       </Translate>
//     ),
//   },
//   {
//     title: <Translate>'社区与互动'</Translate>,
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <Translate>
//         在 Eiche的小书架，我们珍视每一位读者的反馈与互动。通过留言、评论和讨论，你可以和作者以及其他读者分享你的想法与感受。
//         这里不仅是阅读的地方，还是一个充满温暖与交流的社区。无论你是资深书迷还是初次接触，都欢迎你加入我们的书友大家庭。
//       </Translate>
//     ),
//   },
// ];

const FeatureList = [
  {
    title: <Translate>Curated Stories and Deep Reflections</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate>
        At Eiche's Little Bookshelf, every story is a gateway to a different world. 
        Whether it's a romantic comedy full of coincidences and misunderstandings, 
        or thought-provoking life philosophies, you'll always find a piece of writing 
        that helps you escape the mundane and immerse yourself in rich emotional experiences. 
        We've curated a variety of stories to meet your diverse reading needs.
      </Translate>
    ),
  },
  {
    title: <Translate>Inspiration and Creation of Writers</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate>
        Explore the stories behind the creations. Eiche's Little Bookshelf not only showcases 
        complete novels but also shares the authors' sources of inspiration, writing insights, 
        and creative processes. Understanding the world behind the words and feeling the subtle 
        connections between authors and characters may deepen your understanding and resonance 
        with these stories.
      </Translate>
    ),
  },
  {
    title: <Translate>Community and Interaction</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate>
        At Eiche's Little Bookshelf, we value every reader's feedback and interaction. Through 
        comments, reviews, and discussions, you can share your thoughts and feelings with both 
        authors and other readers. This is not only a place for reading but also a warm and 
        communicative community. Whether you're a seasoned book lover or new to this, you are 
        welcome to join our book-loving family.
      </Translate>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
