import React from "react";
import star from '../../img/star.svg'
import fullStar from '../../img/fullStar.svg'
import styled from "styled-components";

const RankWrapper = styled.div`

`
function Ranking ({score}){
    const ranks = [1, 2, 3, 4, 5];
    return(
        <RankWrapper>
            {ranks.map((rank) =>
                    score >= rank ? (
                        <img 
                            key={rank.toString()}
                            src={fullStar}
                            alt="Ranking star"
                        />
                    ) : (
                        <img 
                            key={rank.toString()}
                            src={star}
                            alt="Ranking star"
                        />                    
                    )
                )
            }
        </RankWrapper>
    )
}

export default Ranking;