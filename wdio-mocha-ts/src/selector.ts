// wdio

export function id(value: string): string {
  return `id=${value}`;
}

export function accessibilityId(value: string): string {
  return `~${value}`;
}

export function className(value: string): string {
  return value;
}

type androidUiAutomator = {
  className?: string,
  text?: string
}

export function androidUiAutomator(value: androidUiAutomator): string {
  function buildAndroidUiAutomator(value: androidUiAutomator) {
    const keys = Object.keys(value);
    let builder: string = 'new UiSelector()';
    keys.forEach((k) => {
      // @ts-ignore
      const v = value[k];
      let param: string;
      if (typeof v === 'string') {
        param = `"${v}"`;
      } else {
        param = v.toString();
      }
      builder = builder.concat('.', k, '(', param, ')');
    });
    return builder;
  }

  return `android=${buildAndroidUiAutomator(value)}`;
}

export function iOSPredicateString(selector: string) {
  return `-ios predicate string:${selector}`;
}

export function iOSClassChains(selector: string): string {
  return `-ios class chain:${selector}`;
}
