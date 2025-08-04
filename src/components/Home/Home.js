import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeStyles from './Home.module.css';

const TypewriterText = ({ children, speed = 50 }) => {

  const flattenChildren = (nodes) => {
    let result = [];

    React.Children.forEach(nodes, node => {
      if (typeof node === 'string') {
        result.push({ type: 'text', content: node });
      } else if (React.isValidElement(node)) {
        if (node.type === 'br') {
          result.push({ type: 'br' });
        } else if (node.props && node.props.children) {

          const childrenTokens = flattenChildren(node.props.children);
          result.push({ type: 'element', element: node, children: childrenTokens });
        } else {

          result.push({ type: 'element', element: node, children: [] });
        }
      }
    });

    return result;
  };

  const tokens = flattenChildren(children);

  const [visibleTokens, setVisibleTokens] = useState([]);

  const [tokenIndex, setTokenIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const getTotalLength = (tokens) => {
    let length = 0;
    tokens.forEach(token => {
      if (token.type === 'text') length += token.content.length;
      else if (token.type === 'element' && token.children.length > 0) {
        length += getTotalLength(token.children);
      }
    });
    return length;
  };

  const totalLength = getTotalLength(tokens);

  const buildVisibleTokens = (tokens, charsLeft) => {
    let result = [];
    let charsRemaining = charsLeft;

    for (const token of tokens) {
      if (charsRemaining <= 0) break;

      if (token.type === 'text') {
        if (token.content.length <= charsRemaining) {
          result.push({ ...token });
          charsRemaining -= token.content.length;
        } else {

          result.push({ type: 'text', content: token.content.slice(0, charsRemaining) });
          charsRemaining = 0;
        }
      } else if (token.type === 'br') {
        result.push(token);
      } else if (token.type === 'element') {
        const childTokens = buildVisibleTokens(token.children, charsRemaining);
        const usedChars = getTotalLength(childTokens);
        charsRemaining -= usedChars;
        result.push({ type: 'element', element: token.element, children: childTokens });
      }
    }

    return result;
  };

  useEffect(() => {
    if (charIndex > totalLength) return;
    const timeout = setTimeout(() => {
      setVisibleTokens(buildVisibleTokens(tokens, charIndex));
      setCharIndex(charIndex + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, tokens, totalLength, speed]);

  const renderTokens = (tokens) => {
    return tokens.map((token, i) => {
      if (token.type === 'text') {
        return <React.Fragment key={i}>{token.content}</React.Fragment>;
      } else if (token.type === 'br') {
        return <br key={i} />;
      } else if (token.type === 'element') {
        const ElementType = token.element.type;
     
        const props = { ...token.element.props };
        delete props.children;
        return (
          <ElementType key={i} {...props}>
            {renderTokens(token.children)}
          </ElementType>
        );
      }
      return null;
    });
  };

  return <>{renderTokens(visibleTokens)}</>;
};

const Home = () => {
  return (
    <section className={`page container ${homeStyles.home}`}>
      <div className="container justify-content-center d-flex">
        <div className="col-12 col-lg-6">
          <TypewriterText speed={30}>
            <p className={homeStyles.welcome}>
              I'm <span>Paula Licausi</span><br />
              writer, programmer, and thinker<br />
              based in Spain, planet Earth.
            </p>
            <p className={homeStyles.desc}>
              Focused on the intersection between philosophy, technology, and the future, I like bringing ideas to life through <span>code</span> and/or <span>storytelling</span>.
            </p>
            <p className={homeStyles.engage}>
              {"<<<"} Ready to engage? Select planet destination or <Link to="/contact">scan the service log and beam me a message</Link>
            </p>
          </TypewriterText>
        </div>
      </div>
    </section>
  );
};

export default Home;
