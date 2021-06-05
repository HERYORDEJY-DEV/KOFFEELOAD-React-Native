import * as React from 'react';
import { SvgXml } from 'react-native-svg';

interface Props {
  fill?: string;
}

export function CartIcon(props: Props) {
  const xml = `<svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.02132 16.6669H9.0226C9.02367 16.6669 9.02473 16.6667 9.0258 16.6667H23.8985C24.2646 16.6667 24.5866 16.4199 24.6872 16.0623L27.9684 4.39562C28.0391 4.1441 27.9896 3.8737 27.8347 3.66493C27.6796 3.45616 27.4371 3.33333 27.1797 3.33333H7.12947L6.54307 0.652561C6.45954 0.271267 6.12672 0 5.7422 0H0.820314C0.367219 0 0 0.373047 0 0.833333C0 1.29362 0.367219 1.66667 0.820314 1.66667H5.08424C5.18806 2.14171 7.89039 14.4954 8.04591 15.2062C7.17412 15.5911 6.56251 16.4742 6.56251 17.5C6.56251 18.8785 7.66652 20 9.02345 20H23.8985C24.3516 20 24.7188 19.627 24.7188 19.1667C24.7188 18.7064 24.3516 18.3333 23.8985 18.3333H9.02345C8.57121 18.3333 8.20314 17.9594 8.20314 17.5C8.20314 17.0412 8.56993 16.668 9.02132 16.6669ZM26.0922 5L23.2796 15H9.68141L7.49391 5H26.0922Z" fill=${
    props.fill ?? '#000000'
  }/>
<path d="M8 22.4C8 23.7233 9.07667 24.8 10.4 24.8C11.7233 24.8 12.8 23.7233 12.8 22.4C12.8 21.0767 11.7233 20 10.4 20C9.07667 20 8 21.0767 8 22.4ZM10.4 21.6C10.841 21.6 11.2 21.959 11.2 22.4C11.2 22.841 10.841 23.2 10.4 23.2C9.95896 23.2 9.6 22.841 9.6 22.4C9.6 21.959 9.95896 21.6 10.4 21.6Z" fill=${
    props.fill ?? '#000000'
  }/>
<path d="M20 22.4C20 23.7233 21.0767 24.8 22.4 24.8C23.7233 24.8 24.8 23.7233 24.8 22.4C24.8 21.0767 23.7233 20 22.4 20C21.0767 20 20 21.0767 20 22.4ZM22.4 21.6C22.841 21.6 23.2 21.959 23.2 22.4C23.2 22.841 22.841 23.2 22.4 23.2C21.959 23.2 21.6 22.841 21.6 22.4C21.6 21.959 21.959 21.6 22.4 21.6Z" fill=${
    props.fill ?? '#000000'
  }/>
</svg>

`;
  return <SvgXml {...props} xml={xml} />;
}
