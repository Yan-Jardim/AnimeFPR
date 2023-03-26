import * as React from 'react';
import * as S from "./styled"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PaginationComponent({
    total,
    offset,
    setOffset
}) {
    const LIMIT = 20;
    const MAX_ITEMS = 0;
    const MAX_LEFT = (MAX_ITEMS - 1) / 2;

    const current = offset ? offset / LIMIT + 1 : 1;
    const pages = Math.ceil(total / LIMIT);
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
    const first = Math.min(
        Math.max(current - MAX_LEFT, 1),
        maxFirst
    );

    function onPageChange(page) {
        setOffset((page - 1) * LIMIT);
    }
    return (
        <S.List>
            <S.Prev>
                <S.BtnPrev
                    onClick={() => onPageChange(current - 1)}
                    disabled={current === 1}
                >
                    <ArrowBackIosIcon />
                </S.BtnPrev>
            </S.Prev>
            {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                .map((_, index) => index + first)
                .map((page) => (
                    <div key={page}>
                        <button
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </div>
                ))}
            <S.Next>
                <S.BtnNext
                    onClick={() => onPageChange(current + 1)}
                    disabled={current === pages}
                >
                    <ArrowForwardIosIcon />
                </S.BtnNext>
            </S.Next>
        </S.List>
    );
}