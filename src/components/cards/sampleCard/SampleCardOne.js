import React from 'react';
import styled from 'styled-components';
import { Button } from '../../buttons/buttons';

const CardWrapper = styled.figure`

`;

const SampleCardOne = ({item}) => {
    const {content, title, img} = item;
    return (
        <CardWrapper>
            <img src={require('../../../'+img)} alt="" />
            <figcaption>
    <h2>{title}</h2>
    <p>{content}</p>
<Button type="primary" size="large" >View More</Button>
            </figcaption>
        </CardWrapper>
    )
}

export default SampleCardOne
