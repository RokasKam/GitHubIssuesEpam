
export type NavigatorParams = {
  Search: undefined;
  List: ListParams;
};

export type ListParams = {
  organization?: string;
  repository?: string;
  whatIsBeingSearched: string;
  howToSort: string;
};