export function isObject(source: any): source is object {
  return !!source && typeof source === 'object' && !Array.isArray(source);
}

export function deepMergeObjects<A, B>(target: A, ...sources: B[]) {
  const output = Object.assign({}, target);
  if (sources.length === 0) {
    return output;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    Object
      .keys(source)
      .forEach(key => {
        if (isObject(source[key as keyof object])) {
          if (!target[key as keyof object]) {
            Object.assign(output, { [key]: source[key as keyof object] });
          }
          output[key as keyof object] = deepMergeObjects(target[key as keyof object], source[key as keyof object]);
        } else {
          Object.assign(output, { [key]: source[key as keyof object] });
        }
      });
  }

  return deepMergeObjects(output, ...sources);
}
