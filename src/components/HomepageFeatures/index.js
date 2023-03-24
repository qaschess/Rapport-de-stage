import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pourquoi un blog ?',
    Svg: require('@site/static/img/point.svg').default,
    description: (
      <>
       Dans le cadre d'un projet mis en place par le maître de stage je devais créer un blog avec des languages informatique tels que javascript
      </>
    ),
  },
  {
    title: 'Un blog respectant la confidentialité',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Les differentes informations divulgués dans ce rapport de ce stage prennent en compte la confidentialité de Decathlon.     
      </>    
    ),
  },
  {
    title: 'Un rapport de stage enrichi',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Ce rapport de stage presentera les différents métiers découvert au sein du système informatique de Decathlon.
      </>
    ),
  },
  {
    title: 'Comment commencer de lire le rapport de stage?',
    Svg: require('@site/static/img/oip.svg').default,
    description: (
      <>
       Pour commencer de lire ce rapport de stage , vous pouvez cliquer <Link to="blog/bienvenue">ici</Link>
      </>
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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={`row ${styles.rowCenter}`}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
