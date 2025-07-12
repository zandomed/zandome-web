import { useState, type KeyboardEvent } from 'react';

export interface ReadMoreProps {
  paragraphs: string | string[];
  id: string;
  amountOfWords?: number;
}

export default function ReadMore(props: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { paragraphs, amountOfWords = 36, id } = props;

  const splittedText = (Array.isArray(paragraphs) ? paragraphs.join(' ') : paragraphs).split(' ');
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(' ')
    : splittedText.join(' ');
  const endText = splittedText.slice(amountOfWords - 1).join(' ');

  const handleKeyboard = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <p id={id}>
      {beginText}
      {itCanOverflow && (
        <>
          {!isExpanded && <span>... </span>}
          <span className={`${!isExpanded && 'hidden'}`} aria-hidden={!isExpanded}>
            {endText}
          </span>
          <span
            className="ml-2 text-violet-400"
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={id}
            onKeyDown={handleKeyboard}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'show less' : 'show more'}
          </span>
        </>
      )}
    </p>
  );
}
