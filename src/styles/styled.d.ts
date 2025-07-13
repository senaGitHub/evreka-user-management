// This file tells TypeScript what properties our custom theme object includes

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      card: string;
      border: string;
      textLight: string;
      white;
    };
    fontSizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    borderRadius: string;
  }
}
