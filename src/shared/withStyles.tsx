import React, {ComponentType} from 'react';

export default function <P = {}>(
  WrappedComponent: React.ComponentType<P>,
  style: React.CSSProperties,
): React.FunctionComponent<P> {
  return (props: React.PropsWithChildren<P>) => {
    return (
      <WrappedComponent {...props} onClick={() => console.log('###############', style)} style={style} />
    );
  };
}



// export interface AdditionalProps {
//   style: React.CSSProperties;
// }

// export function hoc<P extends AdditionalProps>(WrappedComponent: ComponentType<P>) : ComponentType<Omit<P, 'style'>> {
//     return props => (
//         <WrappedComponent
//             style={style}
//             {...props as any}
//         />
//     );
// }