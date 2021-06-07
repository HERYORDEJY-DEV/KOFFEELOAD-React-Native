import * as React from 'react';
import { SvgXml } from 'react-native-svg';

interface Props {
  fill?: string;
  width?: number;
  height?: number;
}

export function LongArrowLeft(props: Props) {
  const xml = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1641 11.0925C20.1597 11.5949 19.7488 11.9987 19.2464 11.9942L2.87103 11.8506C2.36862 11.8462 1.96484 11.4353 1.96925 10.9329C1.97366 10.4304 2.38458 10.0267 2.88699 10.0311L19.2624 10.1747C19.7648 10.1791 20.1685 10.59 20.1641 11.0925Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.92717 17.0961C8.56887 17.4483 7.99276 17.4432 7.64061 17.0848L2.23005 11.5784C1.87797 11.2201 1.88303 10.644 2.24133 10.2919L7.74766 4.88132C8.10605 4.52925 8.68215 4.5343 9.03422 4.89261C9.38637 5.25099 9.38132 5.82709 9.02293 6.17917L4.16556 10.9521L8.93846 15.8095C9.29061 16.1679 9.28555 16.7439 8.92717 17.0961Z" fill="white"/>
</svg>
`;
  return <SvgXml {...props} xml={xml} />;
}

export function ChevronRight(props: Props) {
  const xml = `<svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.234991 13.1168C0.537617 13.4748 1.03352 13.4791 1.34244 13.1265L6.08889 7.70925C6.39775 7.35675 6.40281 6.78065 6.10018 6.4227L1.44949 0.923031C1.1468 0.565159 0.650897 0.560809 0.342039 0.913316C0.0331126 1.2659 0.0280591 1.842 0.330753 2.19987L4.43332 7.05144L0.246276 11.8302C-0.06265 12.1828 -0.0677027 12.7588 0.234991 13.1168Z" fill="black"/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}

export function ChevronDown(props: Props) {
  const xml = `<svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.368572 0.717291C0.00942755 1.01851 0.00312664 1.51439 0.354501 1.8247L5.75306 6.59242C6.10435 6.90267 6.68042 6.90999 7.03956 6.60877L12.5575 1.97976C12.9165 1.67847 12.9228 1.18259 12.5716 0.872349C12.2202 0.562038 11.6441 0.554718 11.285 0.856002L6.41738 4.93945L1.65509 0.733638C1.30371 0.423327 0.727725 0.416009 0.368572 0.717291Z" fill="black"/>
</svg>


`;
  return <SvgXml {...props} xml={xml} />;
}
