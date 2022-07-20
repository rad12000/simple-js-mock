export declare type BasicMethod = (...args: any) => any;
export declare type MethodOrNeverReturnType<T> = T extends BasicMethod
    ? ReturnType<T>
    : never;
export declare type FieldOrNeverReturnType<T> = T extends BasicMethod
    ? never
    : T;
