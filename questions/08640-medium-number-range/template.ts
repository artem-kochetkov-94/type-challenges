type NumberRange<
  L extends number,
  H extends number,
  Acc extends unknown[] = [],
  Started = false,
  Return = never,
> =
  Started extends true
    ? Acc['length'] extends H
      ? Return | Acc['length']
      : NumberRange<L, H, [...Acc, unknown], true, Return | Acc['length']>
    : Acc['length'] extends L
      ? NumberRange<L, H, [...Acc, unknown], true, Return | Acc['length']>
      : NumberRange<L, H, [...Acc, unknown], false, Return>
