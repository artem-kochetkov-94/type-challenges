type ObjectFromEntries<T extends [PropertyKey, unknown]> = {
  [P in T as P[0]]: P[1]
}
