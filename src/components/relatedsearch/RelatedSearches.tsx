import { styled } from "styled-components";
import { colors } from "../../constants/colors";
import SearchItem from "./SearchItem";
import { MAX_TERMS_NUM, ZERO } from "../../constants/number";

interface RelatedSearchProps {
  query: string;
  focusIdx: number;
  terms: {
    sickCd: string;
    sickNm: string;
  }[];
}

const RelatedSearches = ({ query, focusIdx, terms }: RelatedSearchProps) => {
  return (
    <RelatedSearchWrap>
      {query && <SearchItem string={query} isFocusing={false} />}
      {!terms || terms.length === ZERO ? (
        <p>추천 검색어 없음</p>
      ) : (
        <>
          <p>추천 검색어</p>
          {terms.map(
            (term, idx) =>
              idx < MAX_TERMS_NUM && (
                <SearchItem
                  string={term.sickNm}
                  key={idx}
                  isFocusing={focusIdx === idx}
                />
              )
          )}
        </>
      )}
    </RelatedSearchWrap>
  );
};
export default RelatedSearches;

const RelatedSearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.2rem;
  border-radius: 1.875rem;
  background: ${colors.white};
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);

  & > p {
    color: ${colors.gray};
    margin: 0;
  }
`;
