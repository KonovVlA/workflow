import { ComponentType } from 'react';
export declare function createHOC<P, R = P>(displayName: string, hocFn: (component: ComponentType<P>, props?: R) => JSX.Element): (component: ComponentType<P>) => ComponentType<R>;
