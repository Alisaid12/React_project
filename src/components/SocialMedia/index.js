import React, { useState, useEffect } from 'react';
import { SocialMed, SocialFace, Icon, Paragh, Span1, Span2 } from './style.js';
import axios from 'axios';

const SocialMedia = () => {
  const [Icons, setIcons] = useState([]);

  useEffect(() => {
    axios.get('js/data.json').then(res => setIcons(res.data.social));
  }, []);

  const IconsMedia = Icons.map((IconItem) => {
    return (
      <SocialFace name={IconItem.id} key={IconItem.id}>
        <Icon className={IconItem.icon} />
        <Paragh>
          <Span1>{IconItem.title}</Span1>
          <Span2>{IconItem.body}</Span2>
        </Paragh>
      </SocialFace>
    );
  });

  return <SocialMed>{IconsMedia}</SocialMed>;
};

export default SocialMedia;