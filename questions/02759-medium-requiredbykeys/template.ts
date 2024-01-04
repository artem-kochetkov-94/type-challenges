type RequiredByKeys<T, K extends keyof T = keyof T> = 
  MergeIntersection<
    & Omit<T, K>
    & Required<Pick<T, K>>
  >
