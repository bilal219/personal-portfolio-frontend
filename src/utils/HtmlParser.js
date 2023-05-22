export const HtmlParser = ({
  data,
  parserClass,
  isH1,
  isH2,
  isH3,
  isH4,
  isH5,
  isH6,
  isParagraph,
  isSpan,
}) => {
  return (
    data &&
    (isH1 ? (
      <h1
        className={`${parserClass || ""}`}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    ) : isH2 ? (
      <h2
        className={`${parserClass || ""}`}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    ) : isH3 ? (
      <h3
        className={`${parserClass || ""}`}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    ) : isH4 ? (
      <h4
        className={`${parserClass || ""}`}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    ) : isH5 ? (
      <h5
        className={`${parserClass || ""}`}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    ) : isH6 ? (
      <h6
        className={`${parserClass || ""}`}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    ) : isParagraph ? (
      <p
        className={`${parserClass || ""}`}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    ) : isSpan ? (
      <span
        className={`${parserClass || ""}`}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    ) : (
      <div
        className={`${parserClass || ""}`}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    ))
  );
};
