import { ThemeConfig } from "antd";
import React from 'react';

export class UI {

  static getTheme = (): ThemeConfig => {
    return {
      token: {
        // TODO Set primary color
        colorPrimary: '#002d72',
      },
    };
  };

  public static modalMaskStyle(): React.CSSProperties {
    return { backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' };
  }
}
