import { Location } from 'react-router-dom';
import { State } from "../models/custom/state";

export class Helpers {

  static isEnvProd(): boolean {
    const env: string = `${process.env.REACT_APP_ENV}`;
    return env === 'production';
  }

  static getQueryParam(
    location: Location,
    query: string): string | null {
    const searchParams: URLSearchParams = new URLSearchParams(location.search);
    return searchParams.get(query);
  }

  static isFreshData(prevPropsState: State, propsState: State): boolean {
    if (prevPropsState.loading && !propsState.loading) {
      if (propsState.data) {
        return true;
      }
    }
    return false;
  }
}
