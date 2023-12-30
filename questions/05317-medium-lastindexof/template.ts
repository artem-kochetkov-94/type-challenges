type LastIndexOf<T, U> = T extends [...infer L, infer R]
  ? U extends R
    ? L['length']
    : LastIndexOf<L, U>
  : -1
