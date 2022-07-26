import { isUrlExternal } from "./index";

it.each`
  url                                           | host                | expected
  ${"is-url-external"}                          | ${"github.com"}     | ${false}
  ${"/mrded/is-url-external"}                   | ${"github.com"}     | ${false}
  ${"//mrded/is-url-external"}                  | ${"github.com"}     | ${false}
  ${"./mrded/is-url-external"}                  | ${"github.com"}     | ${false}
  ${"HTTPS://github.com/mrded/is-url-external"} | ${"github.com"}     | ${false}
  ${"https://github.com/mrded/is-url-external"} | ${"github.com"}     | ${false}
  ${"http://github.com/mrded/is-url-external"}  | ${"github.com"}     | ${false}
  ${"https://user:pw@github.com:80/"}           | ${"github.com"}     | ${false}
  ${"https://github.com/mrded/is-url-external"} | ${"not-github.com"} | ${true}
  ${"http://github.com/mrded/is-url-external"}  | ${"not-github.com"} | ${true}
  ${"HTTPS://github.com/mrded/is-url-external"} | ${"not-github.com"} | ${true}
  ${"https://user:pw@github.com:80/"}           | ${"not-github.com"} | ${true}
`(
  "should return $expected when url is $url and host is $host",
  ({ url, host, expected }) => {
    expect(isUrlExternal(url, host)).toBe(expected);
  },
);
