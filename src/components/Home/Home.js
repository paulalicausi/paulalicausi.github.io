
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import homeStyles from './Home.module.css';
import { translations } from '../../content/translations.js';

const TypewriterText = ({ children, speed = 50 }) => {
  const flattenChildren = (nodes) => {
    const result = [];

    React.Children.forEach(nodes, (node) => {
      if (typeof node === 'string' || typeof node === 'number') {
        result.push({ type: 'text', content: String(node) });
      } else if (React.isValidElement(node)) {
        if (node.type === 'br') {
          result.push({ type: 'br' });
        } else {
          result.push({
            type: 'element',
            element: node,
            children: flattenChildren(node.props.children),
          });
        }
      }
    });

    return result;
  };

  const tokens = useMemo(
    () => flattenChildren(children),
    [children]
  );

  const getTotalLength = (items) =>
    items.reduce((length, token) => {
      if (token.type === 'text') {
        return length + token.content.length;
      }

      if (token.type === 'element') {
        return length + getTotalLength(token.children);
      }

      return length;
    }, 0);

  const totalLength = getTotalLength(tokens);

  const [progress, setProgress] = useState(0);
  const [previousTotal, setPreviousTotal] = useState(totalLength);

  if (previousTotal !== totalLength) {
    setProgress((current) => {
      const percentage = previousTotal > 0
        ? current / previousTotal
        : 0;

      return Math.min(1, percentage) * totalLength;
    });

    setPreviousTotal(totalLength);
  }

  const charIndex = Math.floor(progress);

  const buildVisibleTokens = (items, charsLeft) => {
    let remaining = charsLeft;

    return items.map((token) => {
      if (token.type === 'text') {
        const content = token.content.slice(
          0,
          Math.max(0, remaining)
        );

        remaining = Math.max(0, remaining - token.content.length);

        return { ...token, content };
      }

      if (token.type === 'br') {
        return token;
      }

      if (token.type === 'element') {
        const childLength = getTotalLength(token.children);

        const visibleChildren = buildVisibleTokens(
          token.children,
          remaining
        );

        remaining = Math.max(0, remaining - childLength);

        return {
          ...token,
          children: visibleChildren,
        };
      }

      return token;
    });
  };

  useEffect(() => {
    if (progress >= totalLength) return;

    const timeout = setTimeout(() => {
      setProgress((current) =>
        Math.min(current + 1, totalLength)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [progress, totalLength, speed]);

  const renderTokens = (items) =>
    items.map((token, index) => {
      if (token.type === 'text') {
        return (
          <React.Fragment key={index}>
            {token.content}
          </React.Fragment>
        );
      }

      if (token.type === 'br') {
        return <br key={index} />;
      }

      if (token.type === 'element') {
        const ElementType = token.element.type;
        const props = { ...token.element.props };

        delete props.children;

        return (
          <ElementType key={index} {...props}>
            {renderTokens(token.children)}
          </ElementType>
        );
      }

      return null;
    });

  const visibleTokens = buildVisibleTokens(tokens, charIndex);

  return <>{renderTokens(visibleTokens)}</>;
};

const Home = ({ language = 'en' }) => {
  const copy = translations[language]?.home ?? translations.en.home;

  return (
    <section className={`page container ${homeStyles.home}`}>
      <div className="container justify-content-center d-flex">
        <div className="col-12 col-lg-6">
          <TypewriterText speed={30}>
            <p className={homeStyles.welcome}>
              {copy.intro} <span>{copy.name}</span><br />
              {copy.role}<br />
              {copy.location}
            </p>
            <p className={homeStyles.engage}>
              {copy.prompt}{' '}
              <Link to="/contact">{copy.message}</Link>
            </p>
          </TypewriterText>
        </div>
      </div>
    </section>
  );
};

export default Home;
