const getHostFromUrl = (url: string): string => {
  return new URL(url).hostname.replace("www.", "");
};

const isAbsoluteUrl = (url: string): boolean => {
  const formatedUrl = url.toLowerCase();
  return formatedUrl.startsWith("http") || formatedUrl.startsWith("https");
};

export const isUrlExternal = (url: string, host: string): boolean => {
  if (isAbsoluteUrl(url)) {
    const providedHost = getHostFromUrl(url);

    return providedHost !== host;
  } else {
    return false;
  }
};
