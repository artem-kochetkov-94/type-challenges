type Pop<T extends any[]> = T extends [...infer L, infer R] ? L : T;
