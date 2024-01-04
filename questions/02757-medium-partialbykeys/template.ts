type PartialByKeys<T, K extends keyof T = keyof T> =
  MergeIntersection<
    & Omit<T, K>
    & Partial<Pick<T, K>>
  >

type MergeIntersection<T> = Pick<T, keyof T>