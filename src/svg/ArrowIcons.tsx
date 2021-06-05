import * as React from 'react';
import { SvgXml } from 'react-native-svg';

interface Props {
  fill?: string;
}

export function LongArrowLeft(props: Props) {
  const xml = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1641 11.0925C20.1597 11.5949 19.7488 11.9987 19.2464 11.9942L2.87103 11.8506C2.36862 11.8462 1.96484 11.4353 1.96925 10.9329C1.97366 10.4304 2.38458 10.0267 2.88699 10.0311L19.2624 10.1747C19.7648 10.1791 20.1685 10.59 20.1641 11.0925Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.92717 17.0961C8.56887 17.4483 7.99276 17.4432 7.64061 17.0848L2.23005 11.5784C1.87797 11.2201 1.88303 10.644 2.24133 10.2919L7.74766 4.88132C8.10605 4.52925 8.68215 4.5343 9.03422 4.89261C9.38637 5.25099 9.38132 5.82709 9.02293 6.17917L4.16556 10.9521L8.93846 15.8095C9.29061 16.1679 9.28555 16.7439 8.92717 17.0961Z" fill="white"/>
</svg>
`;
  return <SvgXml {...props} xml={xml} />;
}
