import type {Config} from '@jest/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (): Promise<Config.InitialOptions> => {
    return {
      verbose: true,
      roots: ["<rootDir>/src"],
      testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
      moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
      transform: {
              "^.+\\.tsx?$": "ts-jest"
            },
    };
  };
